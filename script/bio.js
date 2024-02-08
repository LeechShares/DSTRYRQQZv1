module.exports.config = {
  name: "changebio",
  role: 1, // Adjust the role as needed
}

module.exports.run = async function({ api, event, args }) {
  const newBio = args.join(" ").trim(); // Join arguments to form the new bio
  
  if (!newBio) {
    api.sendMessage("Please provide a new bio.", event.threadID);
    return;
  }

  // Update the bot's bio
  api.changeThreadInfo(event.threadID, { 'admin_text': newBio }, (err) => {
    if (err) {
      console.error("Error changing bot bio:", err);
      api.sendMessage("Failed to change the bio. Please try again later.", event.threadID);
    } else {
      api.sendMessage("Bot bio updated successfully.", event.threadID);
    }
  });
}