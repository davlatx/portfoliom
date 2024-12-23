document.getElementById('send-button').addEventListener('click', function() {
    const name = document.getElementById('chat-input').value.trim();
    const message = document.getElementById('chat-message').value.trim();

    if (name && message) {
        const chatBox = document.getElementById('chat-box');
        const newMessage = document.createElement('div');
        newMessage.textContent = `Habar yuborildi!`;
        chatBox.appendChild(newMessage);
        

        sendMessageToTelegram(name, message);

        document.getElementById('chat-input').value = '';
        document.getElementById('chat-message').value = '';
    }
});

function sendMessageToTelegram(name, message) {
    const botToken = '7622436450:AAFiAm2_1a8XJ1_g5qbANwRn5DTWxyMbzY8';
    const chatId = '7223780833';
    const text = `Foydalanuvchi ismi: ${name}\n Yuborilgan habar: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function showPhoneNumber() {
    document.getElementById('phoneModal').style.display = 'block';
}

function closePhoneNumber() {
    document.getElementById('phoneModal').style.display = 'none';
}

function showPhoneNumber1() {
    document.getElementById('phoneModal1').style.display = 'block';
}

function closePhoneNumber1() {
    document.getElementById('phoneModal1').style.display = 'none';
}

function copyPhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').textContent;
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Telefon raqami nusxalandi: " + phoneNumber);
    }).catch(err => {
        console.error("Nusxalashda xatolik yuz berdi:", err);
    });
}