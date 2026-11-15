// Search Properties

function searchProperty() {

    let location = document
        .getElementById("location")
        .value.toLowerCase().trim();

    let type = document
        .getElementById("type")
        .value;

    let properties = document.querySelectorAll(".property-card");

    let count = 0;

    properties.forEach(function(property) {

        let propertyLocation = property.dataset.location;
        let propertyType = property.dataset.type;

        let locationMatch =
            location === "" || propertyLocation.includes(location);

        let typeMatch =
            type === "all" || propertyType === type;

        if (locationMatch && typeMatch) {

            property.style.display = "block";
            count++;

        } else {

            property.style.display = "none";

        }

    });

    document.getElementById("noResults").hidden = count !== 0;
}


// Property Details

function showDetails(name, location, price) {

    alert(
        "Property Name: " + name +
        "\nLocation: " + location +
        "\nPrice: " + price
    );

}
