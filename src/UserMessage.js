import React from "react";

export default function UserMessage(props) {
    // Initialize a HTML element for the user's message, given the input text.
    const message = (
        <div class="message user">
            <div class="message-content">{props.input}</div>
        </div>
    );

    // Returns the message element.
    return message;
}