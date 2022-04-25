const zipCodeFiveId = users.filter(u => u.address.zipcode[0] === "5")
    .map(u => u.id)