---
title: The hidden cost of multicolour 3D printing, and how to cut it
strapline: Colour changes, not colours, decide how much plastic ends up in the bin.
description: Every colour change on a single-nozzle printer flushes plastic into the bin. Here is how much really goes to waste, why, and the settings and design habits that cut it.
date: 2026-11-08
topic: 3D printers
cover: snapmaker-u1
related: elegoo-centauri-carbon-2-combo, anycubic-kobra-4-combo, creality-k2-plus-combo, snapmaker-u1
---

Four-colour printers have become cheap, and the first multicolour print off one feels like magic. The second thing most owners notice is the pile of twisted plastic "poop" next to the printer. On some prints, the waste weighs as much as the model.

> **Key takeaways**
> - Single-nozzle multicolour printers waste filament on every colour change, because the old colour has to be flushed out of the hotend.
> - Waste depends on how many colour changes a print needs, not how many colours it uses.
> - Flushing into infill, grouping colours and designing for fewer changes can cut waste sharply.
> - Toolchanger and IDEX printers avoid most of the waste, at a higher price.

## Why single-nozzle printers waste plastic

Most affordable multicolour systems, such as Bambu’s AMS, Creality’s CFS, Anycubic’s ACE and ELEGOO’s CANVAS, feed several spools into **one** nozzle. To change colour, the printer cuts the filament, pulls the old colour back, pushes the new one in, and then pushes plastic through until the nozzle runs clean. That flushed plastic is the waste.

The flush has to be generous because colours mix in the melt zone. Going from black to white needs far more plastic than white to black, since even a trace of black tints white plastic grey.

## How much waste are we talking about?

Here is what reviewers recorded:

- On the [ELEGOO Centauri Carbon 2 Combo](/en/review/elegoo-centauri-carbon-2-combo/), 3DWithUs printed a multicolour figure about five inches tall in around 14 hours, and the purge waste was almost the same weight as the model.
- On the [Anycubic Kobra 4 Combo](/en/review/anycubic-kobra-4-combo/), TechRadar found the default flushing settings wasted close to 40 g on one multicolour print.
- 3DWithUs photographed the purge pile from a seven-hour print on the [Creality K2 Plus Combo](/en/review/creality-k2-plus-combo/) next to the model, and it was hard to miss.

At about $20 per kilogram of filament, 40 g of waste costs around $0.80. That sounds small until you print colourful parts every day: the waste adds up to whole spools, and every flush adds time to the print.

## The number that matters: colour changes, not colours

A two-colour print can waste more than a four-colour one. What counts is how many times the printer swaps filament, and that is usually **colours per layer × number of layers**.

A flat name tag with white letters on a black base might need one colour change. A figure with a black outline on every layer, all the way up, might need two changes on each of hundreds of layers. Same printer, same colours, wildly different waste.

## Settings that cut waste

Most slicers for these printers include options that make a real difference:

- **Flush into infill.** The old colour is pushed into the part’s hidden infill instead of the bin. Free waste reduction on solid-ish parts.
- **Flush into objects.** Print a small extra part, such as a calibration cube or a clip you need anyway, and let the slicer purge into it.
- **Lower the flush multiplier carefully.** Default flush volumes are cautious. Lowering them in small steps, and checking for tinted lines, often saves a lot. Light-to-dark changes tolerate lower values than dark-to-light.
- **Use a prime tower wisely.** A tower helps keep walls clean, but a large tower is waste too. Size it to what the print needs.

## Design habits that cut waste

- **Change colour by layer where you can.** Layer-based designs, such as a two-tone sign or a lithophane-style HueForge print, swap colour a few times in total instead of on every layer.
- **Print colourful details as separate parts.** Small coloured inserts glued or press-fitted into a single-colour body often look better and waste almost nothing.
- **Put light colours on top of dark.** Ordering colours from light to dark within each layer reduces the purge needed.
- **Batch copies.** Printing several identical parts at once spreads each colour change over more plastic that you actually keep.

## When to pay for a printer that doesn’t waste

Two designs avoid most of the problem:

- **Toolchangers** park a separate hotend for each colour. The [Snapmaker U1](/en/review/snapmaker-u1/) swaps between four independent toolheads, so it only needs to prime each nozzle a little rather than flush a long length of filament. That is why it wastes far less plastic and often finishes multicolour jobs sooner.
- **IDEX printers** have two independent heads. Two colours only, but with minimal waste, and they can print two identical parts at once.

If most of your printing is multicolour, the extra cost of a toolchanger can pay back in filament and time. If you print in colour only now and then, a cheaper single-nozzle system with good flush settings is fine.

## The bottom line

Purge waste is the real running cost of single-nozzle multicolour printing. It is driven by colour changes, not colours, and you control most of it with flush settings and design choices. Plan for it before you buy, and you will keep the magic without the bin full of plastic.
