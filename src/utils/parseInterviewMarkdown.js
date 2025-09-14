/**
 * Parse a markdown interview transcript into structured JSON format
 * Expected markdown format:
 * - Headings with ## for sections
 * - Dialogue lines starting with **SpeakerName:** followed by text
 * - Optional timestamps like [00:00:00] to be ignored
 * - Continuation paragraphs that belong to the same speaker (preserved as separate entries)
 */
export function parseInterviewMarkdown(markdown) {
  const lines = markdown.split('\n');
  const result = [];
  let currentSpeaker = null;
  let currentText = '';
  
  // Helper function to push the current speaker's text if it exists
  const pushCurrentSpeaker = () => {
    if (currentSpeaker && currentText.trim()) {
      const normalizedSpeaker = currentSpeaker === 'SPJ' ? 'Simon Peyton Jones' : currentSpeaker;
      // Remove all timestamps from the text before pushing, replacing with a space
      const cleanedText = currentText.replace(/\[\d{2}:\d{2}:\d{2}\]/g, ' ').replace(/\s+/g, ' ').trim();
      result.push({ 
        speaker: normalizedSpeaker, 
        text: cleanedText 
      });
      currentText = '';
    }
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip lines that are just timestamps
    if (line.match(/^\[\d{2}:\d{2}:\d{2}\]\s*$/)) {
      continue;
    }
    
    // Remove timestamps from the beginning of lines but keep the rest
    const lineWithoutTimestamp = line.replace(/^\[\d{2}:\d{2}:\d{2}\]\s*/, '');
    
    // Check for headings (## or #)
    if (lineWithoutTimestamp.startsWith('##')) {
      pushCurrentSpeaker(); // Save any pending speaker text
      currentSpeaker = null;
      const heading = lineWithoutTimestamp.replace(/^#+\s*/, '').trim();
      if (heading) {
        result.push({ heading });
      }
    } else if (lineWithoutTimestamp.startsWith('#') && !lineWithoutTimestamp.startsWith('##')) {
      // Skip the main title (single #)
      pushCurrentSpeaker();
      currentSpeaker = null;
      continue;
    }
    // Check for dialogue lines with speaker names
    else if (lineWithoutTimestamp.includes('**') && lineWithoutTimestamp.includes(':')) {
      const match = lineWithoutTimestamp.match(/\*\*([^:*]+):\*\*\s*(.*)/);
      if (match) {
        pushCurrentSpeaker(); // Save any pending speaker text
        currentSpeaker = match[1].trim();
        currentText = match[2].trim();
      }
    }
    // Handle empty lines - they indicate paragraph breaks
    else if (!lineWithoutTimestamp) {
      if (currentSpeaker && currentText) {
        // Empty line means end of a paragraph - push it and continue with same speaker
        pushCurrentSpeaker();
        // Keep the current speaker active for the next paragraph
        // currentSpeaker stays the same
      }
    }
    // Handle continuation lines (non-empty lines that aren't special)
    else if (lineWithoutTimestamp) {
      if (currentSpeaker) {
        // This is a continuation of the current speaker
        if (currentText) {
          currentText += ' ';
        }
        currentText += lineWithoutTimestamp;
      }
      // If there's no current speaker, this might be descriptive text
      // For now we'll skip it, but you could handle it differently if needed
    }
  }
  
  // Don't forget to push the last speaker's text
  pushCurrentSpeaker();
  
  return result;
}