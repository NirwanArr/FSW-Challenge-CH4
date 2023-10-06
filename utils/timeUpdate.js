function formatDate(date) {
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
}

module.exports = formatDate;
