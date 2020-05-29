<template>
    <div>
        <textarea id="textArea" rows="3">
            Notes here...
        </textarea>
        <button type="button" value="save" id="save">Save</button>
    </div>
</template>

<script>
export default {
  methods: {
    saveTextAsFile() {
        var textToWrite = document.getElementById('textArea').value;
        var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
        var fileNameToSaveAs = "ecc.docx";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            // Firefox requires the link to be added to the DOM before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
    }
  }

};
</script>