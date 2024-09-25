import React from "react";

export default function UserMessage() {
    let input = document.getElementById('messageInput');

    const message = (
        <div class="message user">
            <div class="message-content">{input.value}</div>
        </div>
    );

    input.value = '';

    return message;
}