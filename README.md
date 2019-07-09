# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When the link is clicked, the browser notes that this is an HTTPS protocol request and therefore to take the following actions. A TCP (transmission control protocol) connection is opened, which allows data to be sent between two hosts without being mixed up or lost, and a request containing the link's associated URL (uniform resource locator) is sent from the user-agent (in this case, your browser). The request goes to a DNS server owned by your local ISP (internet service provider), which looks up the IP (internet protocol) address of the domain of the target URL (it may need to ask another DNS server, if it does not have the information itself), and sends it there. The request may travel through a chain of proxy servers on its way to its destination, which have different functions such as caching data, scanning for viruses, and load balancing. The server at that location sends a response containing the set of linked files at that address (the webpage), which is then displayed by the browser. Scripts on the page may trigger additional requests to the server.

Info from https://www.pagecloud.com/blog/website-terminology,
https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview,
https://developer.mozilla.org/en-US/docs/Glossary/TCP

## From start to finish, how does data reach you to be rendered in the browser?

Data is broken up into packets, each of which holds about 1,500 bytes of data. The packets are wrapped with a header and footer that describe what type of data it is, its point of origin and destination, and how to reassemble it. These packets are transmitted through physical fiber-optic cables, or at times wirelessly through cell and radio towers. Individual packets don't have to use the same route - if a connection slows or is disconnected part way through the transmission, packets can take other routes. The computer receives the data from a cell tower (if it's a mobile phone) or through a DSL (digital subscriber line) line connected to a router that powers your home network. Your computer will assemble the packets as they arrive, according to instructions in the header and footer. If some packets don't arrive, the computer will try to piece together what is missing through context from other packets, or will contact the server again and request that those packets be resent.

Info from https://computer.howstuffworks.com/ip-convergence2.htm,
https://www.reference.com/technology/data-transmitted-internet-c7947a76b42c031e

## What code is rendered in the browser?

HTML, CSS and JavaScript received from the client are rendered within the browser.

## What is the server-side code’s main function?

Storing, retrieving and validating information in response to the user-agent's requests.

Info from https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is the client-side code’s main function?

Rendering and styling the website in the browser, presenting it to the user, and handling any input received from the user.

## What is runtime?

The period during which a program is running or executing.

Info from https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

## How many instances of the server-side code are available at any given time?

## How many instances of the databases connected to the server application are created?

I had trouble finding information on these three questions. What I do know is that an instance is a specific realization of an object or program. Each time a program runs, for example, that is an instance of the program (https://whatis.techtarget.com/definition/instance). I could not find any information specifically on multiple instances of these components being created. My guess would be that an instance is created of the client side assets once, when the data is first received from the server. This instance is stored in the cache and referenced by the browser from there. If the data becomes updated on the server, the browser may request it again and a new instance would be made with the updated data. My first instinct is that there can only be one instance of the server-side code available at any time, as JavaScript cannot run functions in parallel, but that seems unlikely considering the number of clients at any time trying to access a site like google.com, for example. I look forward to learning the answers to these questions, and more about server-side code in general!
