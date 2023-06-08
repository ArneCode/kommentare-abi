fetch('kommentare.json')
  .then(response => response.json())
  .then(data => {
    // 'data' contains the parsed JSON object
    console.log(data);
    // You can access specific properties of the JSON object
    console.log(data.propertyName);
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id == null) {
      /*...*/
    }
    console.log("id: ", id);
    id = parseInt(id);
    let cdata = data.Kommentare[id];
    let name = cdata.kommentierterSchueler;
    let title = document.getElementById("title");
    title.innerText = "Kommentare für " + name;
    let globalTitle = document.getElementsByTagName("title")[0];
    globalTitle.innerText = "Kommentare für " + name;
    let comments = cdata.Kommentar;

    console.log("kommentare: ", comments);

    // Get the element with the id "Kommentare"
    var kommentareElement = document.getElementById("kommentare");

    // Loop through the comments array
    for (let comment of comments) {
      var commentP = document.createElement("div");
      commentP.classList.add("comment");
      // Create a new paragraph element for the author
      var authorParagraph = document.createElement("p");
      authorParagraph.classList.add("author");

      // Create a new paragraph element for the message
      var messageParagraph = document.createElement("p");
      messageParagraph.classList.add("message");

      // Create a text node with the author and message
      var authorText = document.createTextNode(comment.kommentierenderSchueler);
      var messageText = document.createTextNode(comment.Text);

      // Append the text nodes to the respective paragraph elements
      authorParagraph.appendChild(authorText);
      messageParagraph.appendChild(messageText);

      // Append the paragraph elements to the "Kommentare" element
      commentP.appendChild(messageParagraph);
      commentP.appendChild(authorParagraph);
      kommentareElement.appendChild(commentP);
    }

  })
  .catch(error => {
    // Handle any errors that occur during the fetch or parsing process
    console.log('Error:', error);
  });
