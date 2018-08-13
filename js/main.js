// Product contructor function
function Watch(brand, name, color, stock, image) {
    this.brand = brand
    this.name = name
    this.color = color
    this.stock = stock
    this.image = image
}

// create new prodcts from the product constructor
var rolex = new Watch("Rolex", "Deepsea", "Black/Blue", 6, "img/deepsea.png")
var fossil = new Watch("Fossil", "Neutra", "Navy", 9, "img/fossil.png")
var citizen = new Watch("Citizen", "CTO", "Black", 15, "img/citizen.png")
var apple = new  Watch("Bizon", "iWatch", "Active Band", 3, "img/smartWatch.png")
var nixon = new Watch("Nixon", "Mission", "Black", 18, "img/nixon.png")
var cartier = new Watch("Cartier", "Skeleton", "steel", 8, "img/leather.png")

// create an array to add products //
var watchArray = new Array
// add products to array of products
watchArray.push(rolex, fossil, citizen, apple, nixon, cartier)

// Lopp through array of products
for(var i = 0; i < watchArray.length; i++) {
  var newItem = document.createElement("div")
  var newDiv   = document.createElement("div")
  var nameH1   = document.createElement("h1")
  var sizeH4   = document.createElement("h4")
  var colorH4  = document.createElement("h4")
  var stockH4  = document.createElement("h4")
  var btn      = document.createElement("button")
  var image    = document.createElement("img")

  // create text for new elements
  var wBrand = document.createTextNode(watchArray[i].brand)
  var wName = document.createTextNode("Style of brand: " + watchArray[i].name)
  var wColor = document.createTextNode("Color: " + watchArray[i].color)
  var wStock = document.createTextNode("In stock: " + watchArray[i].stock)
  var tButton = document.createTextNode("Buy Now!")

  // update source attribute
  image.src = watchArray[i].image

  // update class attribute
  image.className = "img-responsive"
  btn.className = "btn btn-primary btn-lg"
  newItem.className = "col-sm-4"
  newDiv.className = "watch watchName" + [i] + " thumbnail"

  // add text to elements
  nameH1.appendChild(wBrand)
  sizeH4.appendChild(wName)
  colorH4.appendChild(wColor)
  stockH4.appendChild(wStock)
  btn.appendChild(tButton)

  // add elemsnts to new newDiv
  newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

  // add new div to new item newDivn
  newItem.appendChild(newDiv)

  // add new item to the element with id= watch
  document.getElementById("products").appendChild(newItem)




}
