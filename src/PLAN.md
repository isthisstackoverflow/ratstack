# Implementation Plan

I have no idea, so I write it down.

## Turn Phases

* Receive
  * Income
  * Event Information / Decision
* Move
  * Can move every rat once to any neighbour region
    * Go steal
    * Go terrorize
    * Go subjugate
    * Just move (only possible for own and friendly territory)
  * Results change numbers
* Build
  * Build slot per region (has infinite productions)
  * Global research (fast, rats be fast; think)
  * Policies (how rats are controlled)
  * Declarations (game-changing, rare)

## Values

* Global
  * Eat
    * Can be invested in build
    * Is gained from environment and warfare
  * Think
    * Depend on globally not moved rats
* Regional
  * Rats
    * Can be moved; if they stay, produce global think
    * Grow in count if at least 2
  * Obedience
    * If low, rats don't move and don't research
    * If lower, rats may rebel
      * Withdraw / Fight
    * If lowest, complete chaos and lost region

## Declarations / Policies / Research / Buildings
