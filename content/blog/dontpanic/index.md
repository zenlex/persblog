---
title: "Don't Forget Your Towel"
date: "2022-05-20T05:21:01.488Z"
description: "A reminder to not panic and find the joy in debugging"
---

## DON'T PANIC

is the excellent advice scrawled across the cover of *The Hitchiker's Guide to the Galaxy*. It's also great advice when you find yourself about to start debugging. Every new bug is a new journey, and perspective is everything. I hope that what follows here proves helpful to new programmers and experts alike. 

Bugs cause a stress response. It may range from barely noticeable to full blown frustration or panic but it's there. Whether it's deadline related pressure, imposter syndrome swelling up, or the simple fact that we'd rather spend our time creating cool stuff than fixing broken things. 

There are well measured neurological and psychological responses to these types of stressors. Our internal firmware switches to survival mode. We prime the systems for reactive, reflexive, and fast responses. Our brain essentially starts streaming in UDP instead of TCP so who knows what's at the other end but it's broadcasting fast everywhere!!

 As usual, performance gains in one area come with consequential tradeoffs in others. In this case when the amygdala and hypothalmus take over for the prefrontal cortex, the tradeoff for gaining reactive speed is that the 'gut' decisions get to the action state before the more methodologocial thinking and complex decision making tools have a chance to contribute their opinion. Daniel Kahneman does a great job of explaining this in his book [Thinking Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)

I'm in the process of trying to build a new set of reflexes and habits around this perspective. I find myself enjoying the puzzle solving aspect of it when I'm calm, methodical, and focused about it. I'm also aware that it is not uncommon to get frustrated enough for it to actively hinder the process. So it's time for a little brain refactoring.

The idea is to make the start of any significant debugging a very conscious process and step away from the code for a 10-15 min timeout similar to a process described in [this article](https://www.inc.com/minda-zetlin/decision-making-tough-choices-mental-calm-focus.html). During this time:

    a) do a bit of physical movement - yoga, calisthenics, e
    b) do some conscious deep breathing
    c) see if I need a snack or a nap - "Sleep when tired, eat when hungry"
    d) take a few minutes to think about the approach

The basic idea is to activate the phsyiological systems that burn off the epinephrine, slow the heart rate, and return control to the prefrontal cortex. And do so in a way that methodically trains it as the intuitive state of mind to go to when things aren't working. 

In [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)David Thomas and Andrew Hunt do a fantastic job laying out a methodological approach to the code dissection component of debugging itself that I don't think I can improve upon so I'll refer you there for a professional exploration of that side of things. I will leave you with the end of chapter checklist that I think is quite good. 
<hr>

- Is the problem being reported a direct result of the underlying problem, or merely a symptom?
- Is the bug *really* in the framework you're using? Is it in the OS? Or is it in your code?(select isn't broken)
- If you explained this problem in detail to a coworker, what would you say? (rubber duck)
- If the suspect code passes its unit tests, are the tests complete enough? What happens if you run the tests with *this* data?
- Do the conditions that caused this bug exist anywhere else in the system? Are there other bugs in the larval stage, just waiting to hatch? 
 
 <hr>
<br>
Happy Debugging!