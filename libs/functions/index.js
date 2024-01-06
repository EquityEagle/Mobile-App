export function formatNumberWithK(number) {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  } else {
    return number?.toString();
  }
}

export const formatDate = (timestamp) => {
  const currentTime = new Date();
  const timeDifference = currentTime - timestamp;

  // Convert milliseconds to seconds, minutes, and hours
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    // Display in days if more than a day
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    // Display in hours if more than an hour
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    // Display in minutes if more than a minute
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    // Display in seconds if less than a minute
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
};

export function TransformImage(setPhoto) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  function transformFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    } else {
      setPhoto("");
    }
  }

  return { handleImageUpload };
}

export function getChatUser(chat, userid) {
  const person = chat.people?.find((id) => id !== userid);

  return person;
}

export function formatTimestamp(timestamp) {
  const now = new Date();
  const targetTime = new Date(timestamp);

  const timeDifference = now - targetTime;
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (minutes < 1) {
    return "Just now";
  } else if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
}

export function generateNumericId(length = 8) {
  const characters = "0123456789";
  let numericId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    numericId += characters.charAt(randomIndex);
  }

  return numericId;
}
