import * as React from "react"
import * as Oni from "oni-api"

// Activate is the 'entry point' for your plugin. This function
// is called when your plugin loads, with an Oni API object
// passed in.
// 
// Working with the Oni API is where all the interesting stuff happens!
export const activate = (oni: Oni.Plugin.Api): void => {
    

    // We'll create a simple status bar item
    alert("hello world")

    oni.commands.registerCommand(new Command(
        "sample.hello",
        "Sample Command",
        "this is sample command",
        () => {
            alert("hello!!!!!")
        }
    ))
}

class Command implements Oni.Commands.ICommand {
    constructor(
        public command: string,
        public name: string,
        public detail: string,
        public execute: Oni.Commands.CommandCallback,
    ) {}
}
