function handleSubmitForMeaningCloud(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    Client.validateUrl(url)
    if (Client.validateUrl(url)) {

        console.log("::: Form Submitted :::")
        fetch("http://localhost:8080/api", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url })
            })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                document.getElementById('results').innerHTML = res.message

                // Populate html with result
                document.getElementById('polarity').innerHTML = res.polarity
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence
                document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence

            })
    } else {
        alert("This is not a valid url. Please try again!")

    }
}

export { handleSubmitForMeaningCloud }