

let xmlContent = '';
let tableBooks = document.getElementById('grid');
fetch('books.xml').then((res)=>{

	res.text().then((xml)=>{
		xmlContent = xml;
		console.log(xmlContent);
		let parser = new DOMParser();
		let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
		let book = xmlDOM.querySelectorAll('book');

		book.forEach(booksXMLNode => {

			// Author
			let div = document.createElement('div');
			div.classList.add("gridItem");
			div.innerText = booksXMLNode.children[0].innerHTML;
			tableBooks.appendChild(div);

			//Title
			div = document.createElement('div');
			div.classList.add("gridItem");
			div.innerText = booksXMLNode.children[1].innerHTML;
			tableBooks.appendChild(div);

			//Price
			div = document.createElement('div');
			div.classList.add("gridItem");
			div.innerText = booksXMLNode.children[3].innerHTML;
			tableBooks.appendChild(div);

			//Description
			div = document.createElement('div');
			div.classList.add("gridItem");
			div.innerText = booksXMLNode.children[5].innerHTML;
			tableBooks.appendChild(div);
		});
	})
});