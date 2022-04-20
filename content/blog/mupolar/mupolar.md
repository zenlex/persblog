---
title: "HowsThisThingWorkkroWgnihTsihTswoH"
date: "2022-04-20T00:44:39.042Z"
description: "A game about symmetry and curiosity"
---
# MuPolar
*Mu from the Buddhist tradition - implying the question must be unasked, or that categorical thinking is delusional. Polar meaning directly opposite*

As I prepare to start the next phase of my career in Software Development, I've been taking time to reflect on memorable experiences I've had working with technology and other people. I recently wrote a [blog post about a magical tree](https://zenlex.github.io/persblog/abyss/intotheabyss) that I built with some students with the aim of learning more about generative art, collaborative creation processes, system design, and a variety of technical topics in hardware and software. The year prior I took on a similar type of project with my advanced lighting students. This is that story.

### The Design / Build
Working with virtually all recycled materials we collaboratively painted a mandala inspired floor, built a suspended cube and projected on the inside of it, and lit the surrounding space with over 100 theatrical LED fixtures to create ambiance and interactive elements. 

We comandeered the main theatre space for this madness and lined the entry with various projects in photography and electronics the lighting students had completed over the course of the semester. Upon arrival on the stage, visitors were greeted with a sharply lit pathway in an otherwise dark space, beckoning them to come into the cube. Centered in the cube on a pedestal was a 16 pad MIDI controller connected to an iMac backstage. The game was written in Applescript and monitored the incoming MIDI stream, ran the game logic, and then sent commands to a QLab instance that remotely triggered the theatrical lighting fixtures and was also responsible for all the video projection playback. 

I wrote the game logic and created a custom sound scape and sound effects for the game and worked with my students to design and implement the lighting and projection systems.  [There's a video Jay made documenting the installation and user experience that I also created original music for](https://www.youtube.com/watch?v=pLNxQygFoBo&t=363s)

All of the video content was produced by a friend Jay Miller who was experimenting with creating 3D fractals and slicing them to create textural video and images. It was this concept of fractals and explorations of symmetry patterns that gave us the idea for the game logic. 

### The Game
The idea of the game was simple. Initially (level '1'), you were simply required to press the same pad twice. Making the correct second pad choice triggered a flash of light and a change in video content making it obvious something 'good' had happened' Pressing any other pad for the second choice lit the whole room up red and reset the game ('bad'). Each time a player advanced a level with a correct sequence, the input sequence was lengthened by one, so on level two it needed to be an ABBA format, on level 3 ABCCBA, etc...always a mirrored symmetry getting longer by 2 each time it was entered correctly and shorter by 2 each time an error was made. After level 9 a 'win' sequence was triggered with exciting music and lights ballyhooing to and fro. 

The trick was that none of this was explained to anyone who entered. There was just 16 pads inviting you to play. It was amazing to watch the participants experiment and eventually figure it out and then watch others try and get frustrated when they could tell they weren't getting it clearly but weren't sure what 'it' was or what about it they weren't getting, and the interactions between those who had completed it and those who were trying to. 

Much like the MaxMSTREE project I linked at the beginning of this piece, this proved to be another validating experience of the value of grabbing some cool people who are curious and diving headlong into the abyss of creativity with a toolkit full of skills and very little precedent. I highly recommend untethered acts of beautiful creation and reckless learning. 
