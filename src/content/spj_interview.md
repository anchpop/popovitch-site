# Pursuing a Trick a Long Way Just To See Where It Goes, with Simon Peyton Jones

[00:00:00] 


## Introductions

**Andre:** Hello everyone. My name is Andre Popovitch and I have with me here Simon Peyton Jones. Who you may know as a creator of the Haskell Programming Language. A very pivotal figure in the community of Haskell. And how are you doing? 

**SPJ:** I am fine. Thank you. Yes. Here in Cambridge, sun is shining.

**Andre:** That's awesome. 


## What is Haskell?

**Andre:** Maybe at a high level, you could tell us a little bit about, what is Haskell? Obviously it's a programming language, but what makes Haskell different and how did you become involved with it? 


## Functional Programming Fundamentals

**SPJ:** So Haskell's a purely functional programming language. Most programming languages work imperatively, that is, they say they have a sequence of steps, do this and then do that, and then do that. That's what Python, or Fortran or C\# will let you do. So in functional programming languages, you program with values rather than with state mostly.

So in a spreadsheet, for example, the cells have values. And you can write a formula in a cell that says, well, cell A3 is the sum of cell A2 and cell A1. [00:01:00] And we don't specify an order in which to execute these formulae. The data dependencies define the order and the spreadsheet's expected to work that out.

So there's a sense in which you're saying what you want the results to be rather than exactly how to compute it. That's a sort of slight oversimplification, but it does as a characterization. So functional programming is like "what would happen if we took programming with values in this way rather than with mutable locations that changed their value over time".

What would happen if you took that idea really seriously? So at first it seems terribly limited. How could you possibly do anything useful? Spreadsheets might be good for writing business models, but nothing else. 


## Historical Context and Origins of Haskell

**SPJ:** But we learned back in the the 1930s when, Alan Turing and Alonzo Church were working actually in the same institution alongside each other.

Alonzo Church was Alan Turing's advisor, in fact. They developed "models of computation", so called. Turing developed the Turing machine, and Alonzo Church developed the Lambda calculus. In a way you can see the Turing machine, [00:02:00] which involved changing the values of symbols on a tape as imperative programming at its most fundamental and Alonzo Church's Lambda Calculus, which involved rewriting of terms, and programming with the values as functional programming at its most fundamental.

And it turned out that the two were interchangeable, were just as powerful. That is, anything you could do with the Turing machine, you could do with Lambda calculus. And anything you could do with the Lambda calculus you do with Turing machine. So functional programming was perhaps surprisingly universal, that you could do anything with it.

So the question is, is it also useful? That we didn't know. So the way I got involved with Haskell was, I was interested in as a university academic in studying the question of what would happen if you took the functional programming idea seriously? Could you make it into a practical programming language that would be actually useful for doing real things?


## The Haskell Committee and Initial Goals

**SPJ:** So Haskell started when a group of us researchers got together and said, well, we're all doing functional programming research, but it sort of adds friction if we all do it in a slightly different language. [00:03:00] Why don't we oh, do something very modest? We'll just agree on a common source syntax so that we can run each other's programs, right?

So, hey, how hard can it be? It'll only takes a couple of months to sort this out, and we'll be done. So we formed the Haskell Committee and started designing Haskell as a language with these very modest objectives initially. Just avoid unnecessary and friction-causing diversity in our research community.

**Andre:** Clearly it's been more than a couple months since that happened. The first standard was that in, 1990. 

**SPJ:** Roundabout then, yes. Even then, it turned out to be more ambitious than we expected. 


## Lazy Functional Programming

**SPJ:** At that time, our unifying theme was not just functional programming, but lazy functional programming. So in strict functional programming, when you call a function, you evaluate its arguments and then pass 'em to the function.

And lazy, functional programming, you don't evaluate the arguments to a function. You just pass a sort of recipe or "thunk" to the function. If the function ever needs the argument, well, it'll evaluate it, but maybe it will never need it. That's why it's called lazy. It's like procrastinating, [00:04:00] postpone all work until it absolutely must be done.

So if you've got any work and you don't have to do it now, just make a thunk or suspension, put it in memory and wake it up later if it's needed. So that was the idea of lazy functional programming. The group of us that designed Haskell were all interested in lazy, functional programming. At the same time, there was a language called ML that had become, uh, was gaining a lot of traction.

That was a strict functional programming language. So was, as it were, exploring the other part of this design space. We were interested in exploring the lazy part. So, why did Haskel turn out to be more ambitious than we expected? 


## The Role of Typeclasses in Haskell

**SPJ:** I think it was largely because of typeclasses. So well into the design cycle, we were struggling a bit with the question of "can you take equality on any two values", right? If you say "f x y = if x == y ...", then blah, blah, blah. Well, in many languages you could just, any value admits equality. But you know what, if they're functions, how can we determine if two functions are equal?

It's not all that [00:05:00] easy in functional programming to determine if two values are equal. So it's tempting to say, well, this function that says "if x == y"..., blah, blah, blah, it doesn't work over any types of "x" and "y", it just works over equality types. A subset of types that admit equality. So ML had a very special case for equality type variables, which we didn't really like.

And then Phil Wadler showed up one day with practically a paper. It was a long email. I still have it actually. And he explained how typeclasses could fit into the type system and also how they could be implemented. And that was a big moment because it was a systematic solution to a tricky and pervasive problem we'd been grappling with.

The same applies to the numbers. If you say "f x y = x \+ y", you'd like that to be true of any numbers that admit addition, right? Not just floating point numbers, not just integers, but also perhaps complex numbers. Who knows? So the idea of "type variables" that range over types that satisfy, that enjoy certain operations. That was clearly pervasive and typeclasses nailed that problem.

After that, [00:06:00] typeclasses were big in Haskell and that forced us to invent a more ambitious language in effect.

**Andre:** And then typeclasses, they ended up not being, I mean, they're Haskell-original, but they're not Haskell-only anymore. They're not Haskell-exclusive. There are other mainstream languages now like Rust that have seen typeclasses and thought "what a good idea we'll implement something very similar". 

**SPJ:** Oh, zillions of languages. Yeah. So typeclasses have proved to have been an extremely pervasively popular idea. It was one of those things where, it was birthed in a single email by Phil Wadler and Steve Blott, and then turned it and we thought, oh, here's an elegant solution to a relatively narrow problem.

And then it turned into a whole research area, all of its own, where we got multi-parameter typeclasses. We got typeclasses with higher-kinded type variables. We've got functional dependencies. We've got associated types. Lots and lots of stuff were birthed out of this little seed. And as you say, the idea was sufficiently persuasive that lots of other languages have, in effect, adopted some form of [00:07:00] typeclasses.

So in some ways it was serendipitous. It was nothing to do with lazy, functional programming at all. You could equally well have done this in ML. It just happened that Haskell was the laboratory or seed bed in which typeclasses got their foothold.

**Andre:** That's very interesting. Are there some functions in the Haskell Standard Library that predate typeclasses? I thought this was the explanation for why there's a difference between math and F math. 

**SPJ:** No, nothing really predates typeclasses. I think typeclasses were in the very first Haskell report. I'm almost certain, God, this is going back 35 years. But there was certainly very, very early. Now at that stage we had, typeclasses for equality and for numbers mainly. There was quite a number hierarchy, not just numbers, but real numbers and floating point numbers.

There's a whole little zoo of numeric typeclasses, and those were all in first edition. A bit later on, we realized that we could abstract even more powerfully using typeclasses. So for functors, if you have [00:08:00] List of Ts, then you might have a map that applies a given function.

So "map" takes a function from "a → b" and a "List a" and returns a "List b". But perhaps if you've got a tree, you can take a function "a → b" and a "Tree a" and return a "Tree b". So there are lots of data types, Lists, Trees, and then you could write more and more and more, all of which have a "map" operation.

So then it's natural to say, just as we, say, oh, we've got equality types and numeric types and this little zoo of typeclasses, maybe we could have mappable types. But unfortunately it's not a mappable type. It's a mappable type constructor. Right? So it's not that "List T" is mappable, it's "List" is the mappable thing, or "Tree", right?

So now the typeclass has to abstract not over a type, but over a type constructor. 


## Higher-Kinded Types and Their Impact

**Andre:** So a type constructor is like, [00:09:00] we have some type like let's say integer or abstractly we can just say T, and then a type constructor just takes that and changes it. So a "List of T" or a "Tree of T" 

**SPJ:** Yeah, exactly. So "List of T", "Tree of T", those are both types. And you know, values can inhabit those types, but List and Tree are type constructors. That is, if you think of the world of types, you might think "List T", like List is a function that takes an argument, that is a type and returns a type. So list has kind "Type → Type".

It's just functional programming at the type level. That's what functional programmers do. Of course, soon as you see a function, you see it everywhere, right? That's why we say that List is a type constructor. And indeed we can give the type constructor a type or a kind, right? Kind and type mean roughly the same thing, right?

So we're gonna say List has kind "Type → Type". In Haskell as it was then \* → \* that we used [00:10:00] to write it.

**Andre:** This is the, you know, often discussed, concept of a higher-kinded type.

When people wanna talk about what makes Haskell unique, normally they'll say laziness or purity, but sometimes, if they're getting into the weeds, they'll say, "and Haskell has higher-kinded types". 

**SPJ:** This is a big deal. We didn't realize how big a deal at the time, because now you've gotta say, well, if I want to say that List is mappable. So for equality, the Haskell type class right there in the first version of Haskell said "class Eq a where". And then it listed the methods of the class.

So "class Eq a where equals :: a → a → Bool". Right? And "notequals :: a → a → Bool". And for numeric, "class Num a where plus :: a → a → a". And "negate :: a → a". Easy enough. Right. Now walk back for mappable things, we'd want to say "class Functor f where". [00:11:00] and now the method is "fmap :: (a→b)→(f a)→(f b)". Right?

And now we're going to instantiate that little "f" with either List or Tree. So then "fmap :: (a→b)→(List a)→(List b)". Or "(a→b)→(Tree a)→(Tree b)". But we summarize all of those in one method. "fmap :: (a→b)→(f a)→(f b)". And that little "f", it's a type variable, right, but what's its kind? Ah, it's Type → Type, 

**Andre:** It has a higher kind. 

**SPJ:** Yes. In order to take advantage of Haskell's typeclasses, which are so useful for equality types and numeric types, in order to use that same power for mappable things, we needed higher-kinded type variables.

**Andre:** I think higher-kinded type variables are, they're very elegant because they [00:12:00] feel like you're just removing a restriction instead of being restricted to only being able to use only just types. You can also now use like type constructors in the same place. 

**SPJ:** fine. Just lift a restriction. But interestingly, at the time we said, oh, this was Mark Jones who first suggested this. We said, Mark, look, this is never gonna work because we need to do type inference. And so the natural thing at the type level would be to have lambdas, right? At the term level, we've got lambdas, at the type level can't you have lambdas? And now of course, you know, λt. t for example, would have kind Type → Type like one of these list constructors, right? But as soon as you have lambdas and type inference, then you know, you, you are lost. Type inference, which is very important to Haskell does not interact at all well with lambdas.

There's no principle types, nothing works. Mark's amazing insight was to realize that we could still have higher-kinded type variables, but we could not have lambda, no lambda at the type [00:13:00] level. We're just gonna have some, when you declare a data type like List or Tree, you get a type constructor List or Tree with kind Type → Type.

So you have higher-kinded constants, but you have no lambdas. So you can only build things of higher kind by using those constants or maybe by partially applying them. Now that is a restriction, right? Sometimes it's a tiresome restriction, but type inference is dead easy. So this simple, simple, such a simple compromise, meant the type inference was no problem at all.

And yet we could have higher-kinded type variables so we could do all this mappable stuff, and that was amazing, right? That launched a whole new design space of library design. If you look at the zoo of Haskell libraries with Applicatives and Functors and monads and, you know, and then Traversable and, MonadZeros and Alternatives.

They're [00:14:00] all higher-kinded. And it all links back to, you know, if you look at it through the right kind of lens, the category theorists say, "oh, this is what we do". Right. So Haskell became a language in which you could more or less directly express some aspects of category theory, and that was never really possible before.

So, this little innovation, higher-kinded type variables with its very cleverly chosen compromise that Mark Jones suggested. And that we've adopted, you know, 35 years later, we still have exactly the same compromise, that unlocked this great new design space. So typeclasses have been widely adopted, higher-kinded type variables, not so much.

There's good reasons for that. 


## Subtyping and Variance Challenges

**SPJ:** My belief is that the reason is that higher-kinded type variables don't interact very well with subtyping and, many mainstream languages. Many, many mainstream languages have adopted subtyping, particularly object-oriented languages, which means most mainstream languages, right?

So with subtyping, you say, well, if I've got a Car, it's a subtype of Vehicle. And Vehicle is a subtype of, I don't know, Machine. [00:15:00] Right? Now, the combination of subtyping and, type inference and parametric polymorphism is a complicated one. Very few languages do all of that. And they all have to make compromises to do that.

Scala is a example incidentally. So what's the problem? Imagine you are asked to say, is "List T" a subtype of "List T1"? Is it a subtype of "List T2"? An OO language has to answer that question. Well, and it depends whether the list is "covariant" or "contravariant" in its type argument.

**Andre:** We, I, we should maybe go explain this a little bit because, I'm not sure that everyone in the audience will know what covariant and contravariant means. What it means is, if A is a subtype of B, is "List A" a subtype of "List B". 

**SPJ:** Mm-hmm. 

**Andre:** Most people would 

**SPJ:** That is the question. And you might think, well, obviously yes, right? But you'd be wrong if lists were defined... You know, remember List is just some random old type constructor. It's a built-in [00:16:00] so we know about it, but imagine we didn't know. Imagine it was, is "S A" a subtype of "S B"?

Supposing S was defined like this. Are you ready? "data S a = Muck"... that's the data constructor, and its argument is "a → Int".

**Andre:** Oh, so "a" is on the left hand side of the arrow 

**SPJ:** "a" is on the left hand side of the arrow, but buried inside the data type S. You can't see that looking at S from the outside. "a" is on the left side of an arrow.

**Andre:** in subtyping, while you can pass a type that's more specific than is expected, it's okay to substitute a type with a more specific type. But then, if "a" is on the left hand side of the arrow, does this create a situation that's covariant or contravariant? 

**SPJ:** It's contravariant because let's imagine that you are expecting me to give you a function of type, "Car → Bool". So I'm calling you and you're expecting me to give you a function of type "Car → Bool". But [00:17:00] then I actually give you a function of type "Citroën → Bool". After all, Citroën is a subtype of Car.

Surely that should be fine.

**Andre:** But it won't because if I try and pass a Honda, then 

**SPJ:** Exactly. Yeah. So because it's on the left hand side of the arrow, you are expecting something of type "Car → Bool". I'm giving you a "Citroën → Bool", wrong! Right? Even though if you look at it, I'm giving you an argument whose little components of the type are more specific. So what that means is you've gotta be careful with function arrows.

Right? Now you could say, ah, but look, so, so "S1 → T" is a subtype of "S2 → T" not if S1 is a subtype of S2, but rather if S2 is a subtype of S1, you've gotta flip it around, right? Okay. You have to be careful with arrows. And we're in an arrow-full world. This is higher order programming.

So now what happens? So, now what happens if that arrow though isn't visible on the surface, it's buried inside. S right? So now you are expecting an "S Car" and [00:18:00] I give you an "S Citroën". Bad. 

**Andre:** That's not good. That's not gonna 

**SPJ:** that's not gonna work.

**Andre:** It's just unintuitive. Because if I'm expecting a Car and you give me a Citroën, That's fine. But if I'm expecting a function that takes a Car and you give me a function that takes a Citroën, then we have a problem. 

**SPJ:** Exactly. Yeah. So what that means is that subtyping, you'd have to be really careful with this variance business. And the variance business can be hidden underneath type constructors somewhere like our "S". So maybe we say, well, that's fine. We'll look at S, at the definition of S, and we'll remember that "S" (this new data type) is contravariant in a, 

**Andre:** Okay. 

**SPJ:** now you'd be fine because now you'd have to the notion of subtyping, we'd have to know about covariance and contravariance.

but already that's a bit difficult because there might be another data constructor of s which uses its argument "a" in a covariant way. So now it's covariant and contravariant. So now you have to remember that's "invariant". And then what? Then it can get worse because now, remember we're trying to abstract over type constructors.[00:19:00] 

So now what happens if I've got, you know, remember that little "f" in the Functor thing? is "f T1", a subtype of "f T2"?. Oh man. Well, it depends on the variance of "f", but a "f" is a type variable. So we don't know its variance. So all I'm saying there's a rabbit hole here that gets pretty deep and I think this rabbit hole is the reason that the combination of subtyping and the higher-kinded type variables have never really caught on.

**Andre:** That makes sense. I had never realized that before. This concept of variance, you know, covariance or contravariance or even invariance. It's interesting because it sort of shows up all the time in places where you don't really think it would, if there's anyone in the audience who, likes to program in Rust, the Rust typechecker needs to be aware of covariance and contravariance because lifetimes implement a subtyping relation 

**SPJ:** Ah, yeah. 

**Andre:** So it's, this is not just a sort of niche Haskell idea. 

**SPJ:** Oh, no, no. I mean, subtyping is terribly useful, terribly compelling, and yet interacts very badly with type inference on parametric polymorphism. [00:20:00] Particularly parametric polymorphism over higher-kinded type variables. It's kind of like a massive fork in the road. And Haskell chose the fork that said, we will not do subtyping, but in exchange we'll get wonderful type inference and higher-kinded type variables and a whole zoo of things.

**Andre:** would the problem be alleviated if you required all type constructors to be covariant? 

**SPJ:** Well, yes, but that would be a huge limitation. Your programmers will start bleating at you and saying, but I want to write this perfectly good data type, and you are saying, I just can't write it. That's terrible.

**Andre:** it would be a very long explanation for why, and no one would, believe you that was a really a good reason. 

**SPJ:** I have a talk I gave a long time ago called, "Classes, Jim, but not as we know them". First gave it at ECOOP, a European conference on object-oriented programming. And the slightly contentious point of view, it's a keynote talk, so I thought I should say something controversial.

So what I was trying to say then is that, object-oriented languages, their [00:21:00] goal is polymorphism. By polymorphism I mean a single function that works over values of more than one type, right? So OO says, I work over vehicles, you can give me a car. So I'm polymorphic in the sense that I will work on any subtype of vehicle.

Alright? That's polymorphism. Polymorphism in general just means functions that work a single code block, if you like, that works over arguments of many different types. Now, parametric polymorphism is a different approach to polymorphism, we'll have a function like "reverse :: List a → List a" and parametric polymorphism is not it's not the same as subtyping.

It just says, I do reversing on this and I don't care about the element type. I'll work equally well on a List Int and List Char. Initially, object oriented languages only had this subtyping polymorphism and had no parametric polymorphism, right? But over time, object-oriented languages have realized that parametric polymorphism is [00:22:00] super valuable, right?

So they've grown what they call generics, which is parametric polymorphism, but only over, you know, not higher-kinded type variables for the reasons we discussed typically. And even grow a sort of form of bounded polymorphism. So then meanwhile on the Haskell, on the functional programming side of the fence, we thought, oh, well this interaction with subtyping is really hard.

So we never introduced subtyping, we just went gangbusters on parametric polymorphism. And, but typeclasses give you something of the same kind of stuff that OO gives you, right? Because if you want to say, look, I'll accept any argument that is a vehicle. Well, in Haskell, you would say the function has type "Vehicle a =\> a → blah", right?

That is, I'll accept any type "a", which is in the "Vehicle" class. Haskell gives you the same kind of flavor as OO, right? But it does it using only parametric polymorphism. No subtype, no.

**Andre:** And [00:23:00] then you can even have typeclasses that act like they have a subtyping relation. Where you have one type class that's a superclass of another. 

**SPJ:** So it goes pretty far. Now, I'm not dissing OO languages because they've been incredibly, I mean, vastly more successful in practice than Haskell has. It's just like we've got these two forms of polymorphism, parametric polymorphism and subtyping, and OO languages have grown to include both. Which is jolly complicated, and makes it really hard to do this abstractive higher-kinded type variables. Meanwhile, Haskell has said, "let's just stick to no subtyping". In effect, the two ways overlap in OO languages. We got two hammers to hit one nail. The OO hammer, the subtyping hammer isn't enough. We have to add the parametric polymorphism hammer.

And Haskell said, let's take the parametric polymorphism hammer and see just how far you can go. Right? And the answer is really almost all the way. And I feel as if, you know, in my talk I said, maybe it's time for OO languages to abandon the scaffolding of [00:24:00] subtyping. You know, that was indeed so important in getting there, but I don't think that's ever gonna happen.

But it is an interesting design discussion. 

**Andre:** Really what they would have to give up on is inheritance. Although inheritance is,

**SPJ:** So useful.

**Andre:** use. Yeah. it's so useful.

When people like OO, I think a lot of what they like is the syntax where they can say "value.method()". And this is something you could definitely keep, 

**SPJ:** So interestingly, Haskell has been growing that notation. The extension is called OverloadedRecordDot, and you can say x.f, and that means the application has field class. 

**Andre:** Oh yes,

Because prior to that, you'd have to do "f x" to get the "f" field out of "x". That's a awesome change. This is a recent extension? 

**SPJ:** Fairly recent, yes, yes. Just in the last year or two. But the whole business about record dots and how to do records in Haskell is one of the less satisfactory aspects of Haskell. The design of a record system is, there's a lot of possible of different possible choices, and none of them seem to be distinctively better [00:25:00] in, in all dimensions.

And so it's think there's a long time to iterate towards something stable on the record front. But the point about these, overloaded record fields is so when you say "x.f", that does not mean that X has to be a record that contains a field "f". No, it just means you have to give an instance for the "f" method.

So it's, like an extensible type class in a way. So that's good because it means that, you can define any old new function on the type of x and add it to its as field instances.

**Andre:** So I can add my own. It's not just a literal fields that you can do f 

**SPJ:** Yeah, yeah, You can, you, as it were, add new methods as it were. Now I'm, making it sound very good and I'm sure it has all sorts of, quirks and, limitations. It's the point about Haskell is laboratory in which to explore a design space. And we're trying to move reasonably slowly to explore this design space.

But I think it's pretty interesting. It doesn't let you do anything you fundamentally can't do without it, [00:26:00] but I think it, will look and feel very different. And so I'm interested to see how that develops in practice.


## Haskell as a Test Bed for Ideas

**Andre:** That is exciting and that actually segues into something I wanted to talk about as well, which is this idea of Haskell being a, test bed for ideas. And of course we've already discussed how typeclasses were something that was tested out in Haskell and they ended up being an enormous success.

But, GHC has this, GHC being the Haskell compiler has this, concept of language extensions. So before something is in sort of the official, "definitive" Haskell, it can be added as an extension and then people can enable it on a file-by-file basis and play around with it. Is that right? 

**SPJ:** Yeah, initially we had, the Haskell report and I was the editor of one version. It was Haskell 98, it was Haskell 2010 and so forth. These were big, what's the word, high investment documents. But it became increasingly hard to sustain in the sense that nobody really wanted to sign up to all the work of getting out a new iteration.

You know, it takes a lot of discussion. And [00:27:00] so increasingly we've moved, towards a situation in which, yes, the compiler implements a couple of hundred extension flags, each of which is meant to enable a specific language extension with a specific document that explains how it works. And then, because that means that the top of your module, you can list at the top of the module which language extensions you're using. So that means that code is sort of self-describing in the sense that the code says "I'm written in base Haskell as it were, together with these 17 extensions".

But when the first screen full of your module is just a list of extensions, that can get a bit daunting. So I've also tried to move towards a system of defining language editions. This is the terminology taken from languages like Rust actually, in which you say this collection of extensions, we'll call an edition and Haskell, or I think there's an edition called GHC 2021, and that means a particular bundle of extensions 

**Andre:** Really, 

**SPJ:** a few more things in the warning flag settings and so forth.

And it's meant to say, well then you can abbreviate a whole bunch of things. [00:28:00] But they're meant to work smoothly together. They're a sort of coherent bunch.

**Andre:** And this alleviates a little bit of the experience that many people had when learning Haskell, which is they would Google what language extension should I enable? And then they'd find several blog posts that give long lists of why I like these ones and not 

**SPJ:** yeah, exactly. It's meant to codify some reasonable extension sets that the people have liked and seem stable enough, right? So the idea is a language edition is probably going to be stable. Not an absolute promise that it'll never change, but nothing gets into a language edition without having, you know, survived several years of battle testing.

**Andre:** so what kind of stuff are people putting in extensions? We gave the example of the ability to say add like "." to access a field of a type, but, I mean there's hundreds, like you said. Is there anything notable? 

**SPJ:** The way to find out is to go to the GHC proposals site, because this is how you get to have a new language extension. It's not just a whim of the developers, which it used to be. Now there's a GitHub repository, just search for "GHC proposals", [00:29:00] and a committee that evaluates. And a lot of them are, you could think of them as somewhat incremental.

Some of 'em are not specifically, language extensions. Like one of the most recent ones is to do with trying to expose a set of libraries for template Haskell, which we haven't talked about, but it's something that the details of which change relatively frequently, but quite a lot of libraries depend on template Haskell, but they depend on it in fairly simple ways.

If we could arrange, they could depend on not the whole interface of template Haskell, but only a subset, a stable subset, because they don't need the, as it were, the full glory. Then when we release a new version of GHC, maybe the stable subset that they depend on, won't have changed at all. And that would mean that they didn't need to have version bounds updated.

So one of the things that has changed is paying a lot more attention to trying not to gratuitously break people's code. One way to do that is by being more fine-grained. So that was, that's [00:30:00] one proposal that's opened at the moment. There's another one, let's see, named defaults. It has to do with defaulting for typeclasses.

There's another one on staging syntax. When you, again, when you use Template Haskell, are you depending on compile time changes or runtime changes? And that again helps your build system. So a lot of these are not, large scale language developments. They're more like solidifying the ecosystem to make it more robust to changes.

**Andre:** I mean, there are the really fancy ones that you hear about often, like a linear Haskell, which adds 

**SPJ:** Oh yeah. 

**Andre:** And then, even bigger, I don't think this is in GHC yet, although you can correct me, but Dependent Haskell has been worked on for quite a while, which, I'm sure will be a very big language change once that is 

**SPJ:** Not really. So it has much more of the characteristics of what you described as lifting restrictions. Dependent Haskell is not a single increment. It's a series of 20 small increments. And there's several proposals about this, [00:31:00] which develop the language. So let me just give an example so that if you... one little step along the way was when you call "reverse", you usually in ask, you say "reverse xs", some list "xs".

But "reverse" is a polymorphic function. So it actually takes a type argument. So "reverse :: forall a. List a → List a". So a full call of reverse would look like reverse applied to Int and applied to [1,2,3]. So it takes type argument and then a term argument. Now that type argument is usually invisible.

You don't write it in the source program. But it's there in GHC's core language and occasionally it's very convenient to be able to write it. So one little step along the way was to allow you to write explicit type arguments by saying "reverse @Int [1,2,3]". They may say it's strictly redundant, 'cause you can figure it out from the term argument.

But sometimes it's very, very helpful to be able to write the type argument explicitly. Amazingly helpful. It's very, very useful extension. Sometimes, as it turns out, it's quite helpful [00:32:00] to be able to insist that you write type arguments. Not for "reverse", but some for some other functions. We could go into why, but then instead of writing "foo @Int" and then some term argument, you might write "foo Int" and some term argument and you must put it there.

If you omit it, then you'll just get a type error. So the type argument becomes compulsory instead of optional. 

**Andre:** And then the @ indicates that it's 

**SPJ:** The @ says I'm filling in for an optional type argument. So the type of a reverse is "forall a. List a → List a" , the type of "foo" might be "forall a → List a → List a" and that says, oh, the type argument is compulsory.

You must write it. And so in fact, terms and types become a little bit more similar. They look, they just sit side by side. And again, there's a whole, story about this. But for some styles of programming it can be really helpful to have compulsory type arguments. So then there's a whole infrastructure to, [00:33:00] just exactly what should the design look like.

How do we, how can we tell that something is a type? Well now it looks, if I see foo applies to Int, how do I know if that int is a type or a term. 


## Exploring GHC's Core Language

**SPJ:** Types of terms get a bit more mixed up together. There's a big design space there.

**Andre:** But I see why you described this as lifting a restriction because now it seems like I can pass a type to a function the same way I could pass a value. 

**SPJ:** Yeah. And in fact, in GHC's internal language "Core", we have been passing types to functions since 1990. One of the, our biggest initial insights into how to compile Haskell was that, we take this big source language, Haskell, and we compile it to this small, intermediate language, which is kind of the Lambda calculus, but we wanted it to be a typed Lambda calculus.

But a typed Lambda calculus in a polymorphically typed world. Well, you know, we could look back 20 years and find "System F". Which is apparently a very exotic theoretical artifact, from Girard and Reynolds, that I learned about in my [00:34:00] theoretical computer science lectures. But actually it is the language that GHC uses as its core language. And in System F, every polymorphic function gets explicit type arguments.

So while they might be implicit in the surface language that programmers write, they're explicit in the intermediate language that GHC manipulates and always have been. A lot of this "Dependent Haskell" stuff is no more than a way to make explicit in the surface language things that were always there in the core language.

**Andre:** Is this the sort of secret sauce that allows the GHC developers to remain productive despite having to keep track of like 200 different extensions? 


## The Role of Type Inference in Haskell

**SPJ:** Yes, in the following sense. The Haskell source language is indeed big and quite ad hoc in a number of ways. That's why if you read GHC proposals, you see lots of detailed discussions about how many angels can dance on the head of a pin. It's painstaking and some of it is a bit ad hoc, right? So just how should type inference work, right?

So there's a number of compromises that make type inference [00:35:00] work, for example, that if you want a polymorphic function to call itself, a recursive function, can a recursive function call itself polymorphically? If and only if you give it a type signature, that's a surface language design choice, but in the intermediate language, it makes no difference.

So all of that complicated complication is compiled down to this very small intermediate language. And the intermediate language has, you know, it's represented by an algebraic data type of course. 'cause that's the way we represent syntax trees in Haskell. And this data type only has about 10 constructors. From all the hundreds of language constructs, bam! 10.

Everything goes down to 10. It's a really small intermediate language. 


## The Stability of GHC's Intermediate Language

**SPJ:** Oh, and moreover, it's a statically typed intermediate language. As we compile, GHC then consists of a lot of passes that go from this language to itself, optimizing it. Now, if one of those passes makes a mistake, you know, there's a variable out of scope or there's something that's ill-typed.

Of course, that should never happen if the compiler is [00:36:00] bug-free. But we can have a little type checker, which isn't necessary if the compiler's perfect, but is helpful when you're not sure that the compiler's perfect. That sort of health-checks the compiler itself to say, oh look, this pass produced a program that was ill-typed.

Now look at the difference that that has, right? So if the intermediate language was untyped, then there's a bug in some optimization pass. It runs right through the compiler, generates machine code, run the machine code, crash! Right? How do you find your way back? Right now you've gotta find out why did it crash?

You know, but the machine code was wrong because, and then you have to work all the way back through the optimization pipeline to find out who introduced that bug.

**Andre:** It started being wrong after this pass, but you know, if there's 20 passes, 

**SPJ:** Yeah. 20 subsequent passes. Yeah, that's right. So it's been heavily disguised. And then finally you have some machine code that you're running. And when you run it, all you get is, you know, I dereferenced the null pointer, or it's [00:37:00] some really obscure and horrible runtime failure.

These are incredibly hard to find. Right? Contrast that with you compile the program and blam! After pass 32, type error. 

**Andre:** Easy. It is right there in pass 32. 

**SPJ:** It's right there in pass 32. It's transformational. So I'm a huge fan of a statically typed intermediate language for keeping compiler developers sane. But it's also useful as a sanity check any language design change in the surface language that can still be compiled to the same intermediate language is, as it were, "superficial". You can be confident that the whole backend will be fine.

**Andre:** because the backend, uh, is seeing the same sorts of things that it was seeing before. 

**SPJ:** That's right. It's the same language, it's the same type system. Nothing has changed as far as the backend's concerned. All that has changed is "desugaring" or maybe type inference. Now, on the other hand, if you want to propose a language change, like, I don't know, concatenable records, right? Then that would imply some [00:38:00] actual change in the intermediate language.

Now you're into a whole different thing, right? And we haven't made a language change in the intermediate language for, you know, a decade, even two decades. Really, it's very stable. So it's a incredibly good sanity check on what language, surface language features are, as it were fundamental and which are kind of superficial.


## Theoretical Foundations and Practical Applications

**Andre:** And so, this implies that the type system used by the core language, which I believe is called System Fω now. 

**SPJ:** But Fω itself is, that wasn't extra to GHC. That was, you know, Girard designed that. Right. That was a theoretical computer. We just picked it up and used it. 

**Andre:** So you just picked this thing off, the shelf and used it and it's been good pretty much since the nineties. That's pretty 

**SPJ:** That's pretty amazing. Right? That's theoretical computer science being the practical reality in the guts of a production compiler for, three and a half decades.

**Andre:** I actually didn't know that it was not developed for GHC. I kind of assumed it was just because it seems so perfectly suited. 

**SPJ:** No, we did extend it a bit. So when we added type families, [00:39:00] which also are taken from another, the world of dependent types and so forth, but adding type families was a significant extension of the intermediate language. But we did that two decades ago and that stayed stable since, but that part is not part of system F directly.

It's an extension.

**Andre:** So if someone was writing a programming language now and they were thinking about having a typed core language, would you suggest System Fω as a good choice? 

**SPJ:** Well, our extension is called FC, so it's a good search term. "System FC". FC is Fω plus, data types. Girard was not worried about data types, plus data types in including, plus data types and, you know, type equalities and type families. So it is a significant extension of Fω, but very much in its spirit.

So, yes, it's not the only choice, but it's a choice that served us very well.


## The Importance of Static Type Systems

**Andre:** it's interesting because there are sort of two sides to types and obviously types are very important thing to Haskell. The first one is, the most visible one, which is that they find bugs for you. You know, you pass a string to [00:40:00] a function that expects an integer and it doesn't compile. But then the second thing is the types actually can, be used to influence how the code is generated.

But this, aspect is of the types finding bugs. For you, it sounds like it's been very useful because it means that anytime you're automatically changing source code, you can check to see, did I introduce a bug that's detectable by the type system? 

**SPJ:** There's a lot of debate about the static type systems, but I think they're slowly, slowly winning. But for me, the two things about static type systems that are not so often discussed are these. The first is when you design a piece of software that you want to live a long time, you often have in your head, certain "invariants". Things that are true about the function.

That "sort" returns a sorted list and you know that your customer update returns a database we know that has some invariants, that every customer lives in here and every, customer that has a customer has an address and every address says, you know, lots and lots of invariants, many of which are not very explicit.

Now, a type system lets you make some of those invariants, explicit. We could say it [00:41:00] like this. A type is like a theorem about your function. If a function has type Int → Bool, it's, a theorem that says if you give me an Int I will return a Bool or I'll diverge. So it's not a very powerful theorem, but it is a theorem or more of a, if you, the theorems with parametric polymorphism become a bit more powerful.

If "reverse :: List a → List a", that tells you that because it's forall a. List a → List a, it tells you that reverse doesn't mess with the values.

**Andre:** It can drop them or copy them, but it can't add one to any value. 

**SPJ:** That's right. And it can't take control decisions based on the values. So what that means is that if you took a list and you mapped over it, like to double on the values and then you reversed it, that would give the same result as if you first reversed it and then mapped double over it.

**Andre:** And you can see this just based on the type signature. 

**SPJ:** That's the point. So there's a theorem about "reverse". "reverse" and then "map" is the [00:42:00] same as "map" and then "reverse", provided the map is of type a → a. This is a so-called free theorem, which comes from the type of map. You don't have to look at the body of map, you just know it from its type.

And this also goes way back into theoretical computer science. It was John Reynolds who developed this idea. It's called "Reynold's Parametricity Theorem". And Phil Wadler again popularized it, with a paper called "Theorems for Free". The title of the paper connoted the idea. Phil is very good at inventing paper titles. He said "once you have the type of a polymorphic function from that type alone, I will cough up a theorem that is true about that function". 

**Andre:** That's very interesting 

**SPJ:** quite a powerful thing to do. So now backing up then, types are like weak theorems. But a great advantage of types is that there are theorems that are checked by the compiler every time you compile.

And moreover, the language of types is like a design language. You'll often, if you talk to Haskell programmers or [00:43:00] OCaml programmers, and you are one, you often start by writing the function type signatures. You write the API of your library in OCaml, you'd write the module signature for the module you're about to write.

So the types give you a language in which to express things explicitly and in a machine checked way that would still be there, but implicitly and never machine checked if you were programming in an untyped language. So they are, if you like, I think of type systems as a design language, a machine-checked design language for software.

**Andre:** It's kind of beautiful. When I was first learning Haskell, I had this realization that like the types are like documentation, that is always correct and makes my code run faster. And sometimes I don't even have to write it because, Haskell can infer 

**SPJ:** Sometimes they're inferred. Now, the second thing about types, that I think is less frequently discussed is longevity. So here I'll again make a contentious statement, which I'm very interested [00:44:00] if people actually have data about this because I do not have data. But my impression is that when you have large codebases written in an untyped language, that two years after it's been written, the developers themselves are a little anxious about modifying it lest they break it, no matter how many tests they've written.

And when those developers have left the company, then it becomes increasingly difficult to modify that software at all. So then, software becomes sort of frozen in time, and then we have to work around it from the outside. We don't dare modify it. So we sort of work around it outside trying to still make use of it even though it doesn't quite do what we want anymore.

And then after a bit, we have to throw it away and start again. It's difficult to maintain software over, let's say, a timescale of decades now in a statically type language. My impression is that it's much, much easier to confidently refactor and maintain and develop and enhance software over a decade-like timescale.

Oh, here I have [00:45:00] one data point, which is GHC itself. It's a 150 or 200,000 lines of Haskell and we're still doing major heart, lung, you know, transplants in Haskell, in GHC, with a degree of confidence because when you modify your code, of course that doesn't guarantee that you've got it right, but the type system's incredibly good at telling you all the places you need to modify.

So long-term maintainability or sort of total cost of ownership kind of argument, I think is a absolute killer for static type systems. But surprisingly little discussed. I dunno why.

**Andre:** Now that you mention it, I can think of many very long lived projects written in statically typed programming languages. I'm not sure that I can think of as many that are written in, untyped programming languages. It would be interesting to if to collect some data about that. 

**SPJ:** Yeah, it would. It really would. So then if you're going to have a static type language because you care about longevity, then you want the type system to be as rich and expressive as possible so that it can express more of what you want. So I see Haskell as a laboratory in which we're really pushing the idea of static typing and saying, how far can you go?

Right? Start, as it were, [00:46:00] from static typing as the world's most successful formal method, right? One that is widely deployed and used by working programmers and push the bar higher and higher, right? So we've got monomorphically typed languages and we get polymorphically typed languages, and Haskell tries to push the thing as high as you can go and still maintain this.

We just do it every time we compile. So the type inference has to be predictable and fairly fast, but you want the type system to be as expressive as possible. So it's a laboratory in which we explore that idea.

**Andre:** That's very cool and it's clearly paid dividends. 


## Haskell's Purity and Laziness

**Andre:** The types are a very important thing to Haskell, but we've barely even talked about laziness. All we've talked about laziness, as we've mentioned that functions decide when their parameters are computed. 

**SPJ:** Yeah,

**Andre:** Their parameters are not computed before the function is called necessarily. And this sort of relates to the Haskell concept of purity as well, and I was thinking maybe you could discuss that a little bit. 

**SPJ:** I've given quite a few talks about this over the time. [00:47:00] Particularly, there's a talk called "Escape from the Ivory Tower", I think, or my keynote to POPL a long time ago that describes this. But laziness was the war cry that brought that particular group together. At the time, lazy functional programming was regarded as quite academic, quite exotic, quite, you know, quirky.

It was a very inspiring manifesto to cluster around. But what it did for us, in fact, is that in a lazy language, you really can't have side effects. So if I have a list, and I pass the list to a function. Imagine the function could evaluate the elements front to back or back to front, or just three of them, or none of them at all.

Now if each of those elements is a suspension or thunk that does some side effects, then you wouldn't know whether things that were printed were printed, you know, in forward order or reverse order or not at all, or just three of them. So side effects in a lazy language, unrestricted side effects where any function can [00:48:00] have a little side effect on the side.

So it has type Int → Int, but by the way, it does some I/O. That is insupportable in a lazy language. Now, in language like ML, which was strict, it was not insupportable. It was sort of a bit of a hack, but perfectly doable because the order of evaluation is completely defined, but not so in Haskell.

So that forced us, laziness forced us to be pure. It kept us true to the idea of purity. It was a bit like wearing a hair shirt, you know, like in a sort of slightly aesthetic way, right? Where we will stick to the idea of purity. And I now regard sticking to purity as a much more important tenet of Haskell than laziness.

Just saying Haskell is laboratory in which to explore the idea of really sophisticated type systems without subtyping. How far can you push parametric polymorphism? Haskell has also been a laboratory in which to explore the idea of purity, remorseless purity with no compromises. Because compromises [00:49:00] just mean you can't reason about your program at all.

For about a decade, that meant our language really didn't have any I/O or had very clumsy I/O, so it was pretty academic. 


## Monads and Their Impact on Haskell

**SPJ:** But then, Phil again, and I worked with him closely on this, had the idea of using monads to constrain effects. So that led first to his paper "Comprehending Monads". And then we wrote a paper called "Imperative Functional Programming", which said the way to do I/O in Haskell is through Monads.

So Monads provided us a way to combine, the purity of Haskell with side effects. With the two not being smooshed up together in a bundle that meant you couldn't reason about your program anymore, but with the type system keeping them sort of hermetically sealed from each other. And that proved to be very, very influential as it turned out.

So the whole Monads thing, which is again spurred into many other languages, many other languages, was ultimately driven by [00:50:00] our embarrassment over a lack of I/O and effects. And again, appropriating idea from Phil's original paper, Comprehending Monads was drawn directly from work by Eugenio Moggi, who is very much a theoretical computer scientist, and who wrote papers that I barely understood about what a monad is and how he might use it.

And Phil described how to connect that with the world of programming. Yeah. And that enabled us to reconcile purity and laziness with I/O and side effects. And that was an amazing step forward.

**Andre:** And there's this, thing that almost feels like it happens again and again with Haskell, where someone will come up with an idea that maybe seems motivated by some very obvious motivation and they'll implement it, like typeclasses or Monads, for 

**SPJ:** Yeah.

**Andre:** And then as soon as it's implemented in the language and it's available, when people start using it, they start having all kinds of ideas for other ways that they can use it.

If they push it much farther than I assume it was ever envisioned that it would go, 

**SPJ:** That's right. Yeah. So Monads proved [00:51:00] far more influential, important than we thought. And they have given rise to their own sort of zoo of things like Applicatives, which are sort of like weaker than Monads, but still stronger than zero. Oh. It's just another zoo of typeclasses that have grown up around the Monad thing.

Yes. So again, much more pervasive than we originally expected.

**Andre:** And people build on it, there's Monad transformers, which try and work around some the idea of composing Monads together. And, 


## Transactional Memory in Haskell

**SPJ:** Another interesting thing happened with transactional memory. Do you know what transactional memory is?

**Andre:** I've never actually used it. So my understanding is that instead of using a lock when you have two cores, maybe accessing the same data at the same time, instead of having to prevent the cores from stepping on each other's toes by locking, you instead have a any core that's reading it just does all the reads it needs to do.

And then once it's done them, then it checks a log to see if anyone wrote to the memory while it was doing 

**SPJ:** Yeah, you are describing the implementation, but the programmer's interface is this, [00:52:00] you say begin atomic transaction and then do lots of side effects on mutable state. Like, you know, insert something into this queue and remove it from that. Add something to somebody's bank account, remove it from another, and then you say end transaction.

Right? And those mutable side effects, no other thread can see the fact that you've removed something from one bank account without also seeing that you've added it to the other one. So a transaction is seen either not at all or in its full glory to other threads. Right. And it's called transactional memory because this applies to the mutable state in memory. Transactional memory makes it much, much, much easier to write correct concurrent programs. Just vastly easier. It's incredibly good abstraction. Much easier to use than locks.

**Andre:** There are lots of people who have only ever used locks, and so they might say, what are you talking about? You know, locks are fine, but the main problem that locks don't solve is if I have one resource behind a lock and another resource behind a lock, another [00:53:00] resource behind a different lock, I mean, and I want to do something with both of them, then it almost feels like I need a third lock that controls whether both of them are locked. 

**SPJ:** Well, the natural thing to do is say I'm moving money from bank account A to bank account B. So lock A, lock B, then move then unlock A and unlock B. But what happens if another thread is simultaneously moving stuff from B to A? Then he'll lock B and then lock A. So if you are unlucky, then the first one will lock A, the second one will lock B, and the both of them will get stuck to get deadlock.

So deadlock is tricky. And then you have to work around that. And then there's lots of paradigms like hand-over-hand locking, or you want to reduce the lock range as much as possible. So it turns out that for some operations, like, I don't know, manipulating a double linked queue, you can get a research paper from the correct locking protocol from manipulating, a doubly linked queue.

Whereas in transactional memory, you just say, begin transaction, mumble, mumble end transaction, you're done. It's like incredibly much better. So it moves [00:54:00] some problems. Not all, some problems are satisfactorily and easily solved with locking, but it moves some problems from the world of, "it's a research paper to do this" to "any beginning programmer could do it now".

**Andre:** And they'd do it in the natural way. They would do 

**SPJ:** Yeah, just do it in a natural way. Just say, 'cause I just want to say all of these effects should be visible at once or not. What could be easier than that now? The idea was out there. But when I worked with Tim to say, well, but could we use this for Haskell? Then it wasn't long before, you know, we'd invented a special monad, the STM Monad for dealing with this and transactional variables with a different data type.

And we automatically got for free that you could not touch a transactional variable outside a transaction. It was statically rejected by the type system and you couldn't manipulate a non-transactional variable inside a transaction. Um, moreover, we invented "retry" and "or else", which are crucial primitives for making STM compositional, so-called.

It's a whole paper about this called "Composable Memory Transactions" that I wrote with Tim. [00:55:00] So we made STM much better by putting it in Haskell. And then interestingly, there was a period of about 10 years in which transactional memory was all of a swither in mainstream world.

And then everybody drew back. Why did they draw back? Microsoft abandoned, for example, after really a big investment, Microsoft abandoned transactional memory for dotnet. Why? 'cause it was too hard and too non-performant to get right. But in Haskell, transactional memory was dead-easy to get right and very performant because Haskell limited side effects.

The trouble within dotnet is that everything is a side effect. You know, computation happens through side effects. So in principle, every single memory interaction needs to be tracked by the implementation, not so in Haskell only the explicit "read TVar" and "write TVar". So it turned out that very ironically, the place where transactional memory, which is about imperative functional programming, it's a very imperative construct.

The place where STM is flourishing is in [00:56:00] GHC. STM comes in the box with GHC along with concurrent programming, and it's been working for the last 20 years or so, and we get very few bug reports about it. Lots of people use it for building concurrent programs. So STM, an imperative construct, is flourishing and usable in a "nobody talks about it's so straightforward" kind of way in Haskell, whereas it's been abandoned by the mainstream.

**Andre:** It's beautiful because it's built on abstractions that Haskell already had for other reasons, and it just happens that they ended up being super useful for this. It allowed a whole new school of programming that is impossible otherwise. Or like I said, I feel like this happens over and over with Haskell. 

**SPJ:** Concurrency works well in many languages, but I think it works very particularly smoothly in Haskell because of STM and you can really have a lot of threads. It's often called green threads in other contexts. So they're very, very lightweight 

**Andre:** with no locks.

I mean, it's, it's just something lot would be very surprised by. 

**SPJ:** And of course, Haskell provide something a bit like locks called [00:57:00] EnvVars. Which are again, a little bit better than locks, but basically the same kind of thing. And done those for even longer than STM. But STM is the sort of like, I think it's just the way to write concurrent. By concurrent, I mean parallel I/O performing threads.

Threads which are each doing input output and mutating the state in the real world and in the shared memory that they share, but that they may modify the shared memory transactionally.

**Andre:** You know, let's say that I'm a C\# programmer and I really wish I could use software transactional memory. Is there anything, maybe not even for software transactional memory specifically, but what can other languages steal from Haskell that you think maybe will catch on in the future, but hasn't yet caught on in such a big way?

**SPJ:** Oh, I don't know. That's hard to know. I hesitate to pontificate about what other languages might do. But you can point to many, many instances in which other languages have adopted in some form an idea that was first born in Haskell. STM is not such a thing [00:58:00] incidentally, STM was born outside Haskell, but has flourished inside and been abandoned outside.

But comprehensions, and LINQ in C\#, was consciously modeled on Haskell. There's many examples of idea transfer, and maybe that's Haskell's real role. It's not that it should ever be a mainstream language adopted by everybody, but that it should continue its role as a seedbed and laboratory in which to develop ideas.

I mean, I'd love to see it get more widely used, but actually I think that imitation is the sincerest form of flattery. I hesitate to suggest any things that have not been adopted yet that might be in the future.

**Andre:** Well, fair enough. It's always, you know, fraught to predict the future. I mean, you never know. Maybe someone will come up with something even better tomorrow, so.

**SPJ:** And also I think Haskell has moved into a phase in which it's, it's kind of feels like it's more consolidating. You know, Linear Haskell was, was indeed a huge new increment that's essentially still an experimental feature, but mostly the [00:59:00] innovation curve has, leveled out. We're into make everything fit together and just work beautifully and improve error messages and make it more stable over time and make enhancements that just eliminate friction.

We're not making radical new extensions so much all the time.


## Haskell's Ecosystem and Community Support

**Andre:** In the Haskell ecosystem overall, including everything from like the compiler to, the libraries, to the text editor. Is there anything that you would like to see changed? Any, anything where if someone wanted to help out, you know, they could jump in?

**SPJ:** Oh yes. So initially, Haskell was closely identified with its compilers. There was more than one at one stage, but essentially, GHC has become, the de facto. Compilers are such big investments. It's really difficult for a community to maintain more than one. So GHC is the Haskell compiler, but it's now, again, 25 years ago, we started to think hard about libraries and that led a group to develop cabal.

And hackage. So we've [01:00:00] now got an ecosystem of libraries and tools that sit around that are crucial to making Haskell work at scale. Absolutely crucial nowadays. If you say please install this Haskell application, you'll see that cabal is running off and compiling, you know, like, 100 libraries that you indirectly depend on.

Just amazing. It just worked. And Stack is another example. Hackage is the place where all the libraries live. So, the Haskell ecosystem has moved decisively towards not just being a compiler, but being a whole collection of surrounding tooling and libraries. Oh, and then the HLS, the language server has got language server that lets you build an IDE.

So the fragility of that ecosystem is it's entirely an open source ecosystem, run by volunteers, each of whom have their own constraints and priorities, and they're all busy and they're all working hard, and it's easy for that to become uncoordinated. So GHC actually starts something that screws up life for cabal or vice versa.

All these pieces have to work flawlessly together [01:01:00] for the end user experience to be seamless. Some years ago we recognized just having these free floating volunteer groups was not serving our end users very well. So together, a bunch of us developed and launched the idea of the Haskell Foundation.

So it's meant to be a nonprofit organization whose goal is not to take over these groups at all, but to rather serve as sort of glue to help them do their best work, if you like, and obtain resources and help fill in the gaps for the boring but useful things that have to be done to make the experience seamless.

But which teams of volunteers don't find nearly as motivating because they're just boring and useful. The biggest challenge I think we face is that Haskell doesn't have a single corporate sponsor. Many programming languages have a company that supports its ecosystem, so Swift has Apple, and Go has Google, and so forth.

Haskell doesn't really have any company that is, "well we're the company that supports Haskell" or even OCaml now has Jane Street, right? It's effectively OCaml's corporate sponsor [01:02:00] now. Now, the trouble with open source projects at scale, and Haskell is clearly at scale, that lack a single corporate sponsor is the tragedy of the commons, right?

Everybody wants to use it and nobody wants to pay for it. So the Haskell Foundation is trying to at least ameliorate the tragedy of the commons by providing at least a credible vehicle to which you can donate, right, time or money. Whereas previously, if there was no credible vehicle, how would you help?

Right?

**Andre:** Yeah. If you wanted to sponsor, who would you even know to give the money

**SPJ:** Exactly. But now the question is how can we make the case in a way that makes sense to businesses? But, you know, I think the businesses are getting value from Haskell. I want, I want to say, well, look, you pay for your, you know, your use of Amazon web services or Azure. You pay for your phone, you pay for your internet access.

All of these are things on which you rely on in a mission critical way, and you don't even think about paying for them. Of course, you pay for them. It's just a business line, just a business expense. Haskell and GHC, you happen to be able to get them for free. [01:03:00] That doesn't mean that they come for free, it means that somebody else is paying for them at the moment.

But I would love people who use Haskell in a mission critical way to position contributing to the Haskell Foundation in the same way that they position any other business expense. It's a cost of doing business. Because they're relying on that ecosystem for the very things that are giving value, you know, they're getting actual value from it, in effect, their business relies on it.

And if collectively we don't do that, then we'll eventually, you know, volunteers will burn out and the ecosystem will become ragged at the edges. So that's our principle challenge I think, is sort of getting past this tragedy of the commons thing to the point where, you know, every company should think, of course, we belong to the Haskell Foundation.

How could we not, it would be bad for our business if we didn't. And I'm looking for help for people to say, how could we make it a no brainer? I'm not a business person. I don't run a company. I would love help with this. It's very important, the Haskell Foundation should not rely on the generosity of two or three [01:04:00] donors.

It should have a donor base of, you know, tens or hundreds of companies, lacking any one, but we don't.

**Andre:** Yeah, and this is a kind of a pervasive problem as well. I mean, anyone who's worked for a company, if you see a library that says like, you know, you may wanna use it and it may be helpful for your company, but even if it says, you know, you must spend a hundred dollars, you must gimme a hundred dollars to use this library.

Most people are not going to go through the trouble of talking to their boss and saying, "Hey, we need to figure out how to pay this guy". Typically, it is isn't something that's not really done outside of a few exceptions, where you're getting a really big thing like

**SPJ:** But it shouldn't be trivial. It should be, oh, I'm spending a million dollars a year on the salaries of Haskell programmers, so of course I should, you know, spend 1% of that on making sure that the ecosystem on which those programmers rely every day. Remains healthy. So then it's not a hundred dollars, it's like a hundred thousand dollars.

No, or 10,000. [01:05:00] Well, what was it? What's 1% of your million dollars? $10,000. Right? So it becomes a significant sum, but then you're spending a lot on your, the salaries of the people who are relying on this ecosystem. I don't know how to square. So I, I suppose I'm cheekily using this podcast as a, as a way to invite, you know, listeners to say, oh, I could figure out how to help with that.

**Andre:** I'm sure there's going to be many people listening who want to help. So.

**SPJ:** So there's way to help, will be one way to solve the process problem. How can we, how can we make it a, you know, the Haskell Foundation is basically thinking about how could we frame offers in a way that companies could easily make it, you know, align in their project proposal. But in other ways you might, there might be people who just want to contribute time, time or money to actually automate that easy.

So anything will be helpful. It's just how do we solve the tragedy of the commons?

**Andre:** So I scheduled an hour of your time and it's already been like an hour and 20 minutes, so I don't want to go too much longer, but I wanted to ask one last question. 


## The Future of Haskell and Programming Language Research

**Andre:** What keeps you excited about programming language research, after all these years?

**SPJ:** So I think for me it's [01:06:00] always been about trying to take simple, elegant, and beautiful ideas, and turn them into a practical reality. I'm so happy that Haskell remains pure, right? That we didn't sort of somehow find a hacky compromise. Not that these ideas are necessarily better than anybody else's, but I like the idea of taking a few simple ideas and just pushing them really hard.

And I feel privileged to have been, throughout my professional life, people have been willing to pay me to do things that at times might seem fairly impractical, but to take one idea or a couple of ideas and really run with them. So, I have found very motivating and inspiring the fact that some of these ideas are found, inspirational and useful by people who are just doing a day job, right?

Not just by pointy headed PhD students in computer science universities, computer science departments. I love the fact that people out there in industry are using, you know, typeclasses and type families and some pretty [01:07:00] complicated types. Actually, some of our bug reports come from people who are doing, you know, I look at their code and I think, wow, that's really scary.

They're doing pretty exotic things, right? Because they care about longevity. So I find it very motivating, taking fundamentally simple ideas, trying to incorporate them in a practical tool that people can actually use. And then getting feedback from people using that tool, that's quite motivating.

So in the end it's justified by impact, I suppose. I often say that computer science research is a bit like a fractal, right? You can always invent a new programming language. You could do one every day of the week, but it wouldn't matter, right? Nobody would care. Unlike physics, say, when if you're discovering something new about the physical world, that's a result.

But inventing a new programming language, not a result. Right? So novelty in computer science is of no value in and of itself. You must have utility. That's the proof of the pudding. Or what excite me about Haskell is the combination of elegance and beauty and actual utility.[01:08:00] 

**Andre:** I think that's really interesting 'cause I think you see it in many other places where people sort of pursue something simple and they just pursue it as far as they can go. Sometimes it goes very far. I can't remember who, but there was some famous mathematician or physicist who said that he only had like a few tricks and he just applied them every time he saw a new problem.

And sometimes they worked really well.

**SPJ:** Yeah.

**Andre:** to how, you know, you apply monad for STM and it works great. You know, it might not work great for everything, but

**SPJ:** Yeah, that's right. So it's not that Haskell is better than anything else. It's just that in some ways my whole professional career has been, I'm like a one trick pony or maybe two, right? But there's merit in few people pursuing a trick a long way just to see where it goes.

And then maybe when you see where it goes, perhaps you can take ideas from them, use it to infect things more broadly.

**Andre:** That's brilliant. Thank you so much for your time. It's been a, pleasure talking to you. 

**SPJ:** That's been great talking to you too. Yeah. 

**Andre:** I hope you enjoyed listening to that podcast. I know I enjoyed making it. Simon [01:09:00] Peyton Jones is so smart, but so humble. Not every day you get to meet someone like that. Anyway, you probably notice that I'm a pretty small channel, and it would really mean a lot to me if you subscribed. In fact, if you press the subscribe button, most likely I'll immediately get a notification and that will immediately make me smile.

So if you want to be the proximate cause in that chain reaction, hit that button. If you really like the video. You might also want to follow me on Twitter. For example, I have a post on the Android calculator app that many people seem to enjoy, so check me out there too. One last thing, if you really liked it, you can join my Discord server where we talk about math programming, all kinds of things.

So anyway, thank you very much for watching and have a nice day. 

