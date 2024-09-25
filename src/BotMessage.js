import React from "react";

export default function BotMessage(props) {
    return (
        <div class="message bot">
            <div class="message-content">{props.prompt}</div>
        </div>
    );
}