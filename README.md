# L-System 

A simple visualization of L-System made with Three.js  
[Demo](https://ahaku.github.io/l-system/)

There are some ready-made shapes, such as a **Sierpinski Triangle**, **Koch Curve** and so on.

Some kind of [turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics) with the following set of constants and drawing rules is used here:

 `A, F, G` → draw forward  
 `B`  → Skip (used to control the evolution of the curve)  
 `-`  → Turn left by angle delta  
 `+`  → Turn right by angle delta  
 `[` → Save the current values for position and angle  
 `]` → Restore the saved values for position and angle  

---
[Vite](https://vitejs.dev/) is used here as a build tool
