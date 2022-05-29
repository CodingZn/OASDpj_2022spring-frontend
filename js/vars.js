export const PicBaseSrc = "../../images/works/";
export const DetailBaseSrc = "../html/detail.html";
export const ReleaseBaseUrl = "../html/release.html";

//review
export const reviewElementModal = document.createElement("div");

reviewElementModal.innerHTML =
    "                   <div class=\"review block Review\" > " +
    "                        <div class=\"box flexbox box61\">\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <span class=\"UserName_create\">Anonymous</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <span class=\"CreateDateTime\">There is no comment date</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <span class=\"Rating\">unknown</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"box flexbox box62\">\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p><span class=\"Comment\">There is no content.</span></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <label class='CustomerID' title=''><label class='RatingID'><button name=\"ReviewConduct\" value=1><span>Like The Review</span></button></label></label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n"

//painting overview
export const overviewElementModal = document.createElement("div");

overviewElementModal.innerHTML = "<div class=\"overview home\">\n" +
    "                    <div class=\"box1 box\"><a class=\"image_jump\">\n" +
    "                        <img src=\"../loading.gif\" class=\"Image\">\n" +
    "                    </a></div>\n" +
    "                    <div class=\"box2 box\">\n" +
    "                        <div class=\"box21 box\">\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p><a class=\"title_jump\">\n" +
    "                                    <span class=\"Title\">title</span>\n" +
    "                                </a></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p>\n" +
    "                                    <span class=\"ArtistName\">artist name</span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p>\n" +
    "                                    <span class=\"MSRP\">price</span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"box22 box\">\n" +
    "                            <div class=\"box221 box\">\n" +
    "                                <table class=\"OptionalInfo\">\n" +
    "                                    <tr>\n" +
    "                                        <td>\n" +
    "                                            <span>ReleaseDate</span>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <span class=\"ReleaseDate\">value1</span>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td>\n" +
    "                                            <span>Popularity</span>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <span class=\"Popularity\">value1</span>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td>\n" +
    "                                            <span>Genre</span>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <span class=\"Genre\">value1</span>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                    <tr>\n" +
    "                                        <td>\n" +
    "                                            <span>Subject</span>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <span class=\"Subject\">value1</span>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                </table>\n" +
    "                            </div>\n" +
    "                            <div class=\"box222 box\">\n" +
    "                                <p class=\"Description\">There is no description for this painting.</p>\n" +
    "                                <a class=\"button_jump\"><button class=\"ToDetail\"><p>DETAIL</p></button></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>";
//order table
export const order_table_head = document.createElement("tr");
order_table_head.innerHTML = "<tr>\n" +
    "\t<td>\n" +
    "\t\tOrderID\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\tDateCreated\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\tTitle\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\tArtistName\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\tPrice\n" +
    "\t</td>\n" +
    "</tr>";

export const order_table_entry = document.createElement("tr");
order_table_entry.innerHTML = "<tr>\n" +
    "\t<td>\n" +
    "\t\t<span class=\"OrderID\">OrderID</span>\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\t<span class=\"DateCreated\">DateCreated</span>\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\t<a class='title_jump'><span class=\"Title\">Title</span></a> \n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\t<span class=\"ArtistName\">Artist Name</span>\n" +
    "\t</td>\n" +
    "\t<td>\n" +
    "\t\t<span class=\"MSRP\">Price</span>\n" +
    "\t</td>\n" +
    "</tr>";

//released table
export const released_table_head = document.createElement("tr");
released_table_head.innerHTML = "<tr>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tPaintingID\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tTitle\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tArtistName\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tPrice\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tDo...\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t</tr>";

export const released_table_entry = document.createElement("tr");
released_table_entry.innerHTML = "<tr>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"PaintingID\">PaintingID</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<a class='title_jump'><span class=\"Title\">Title</span></a>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"ArtistName\">ArtistName</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"MSRP\">MSRP</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<a class=\"release_jump\"><button>Change</button></a>\n" +
    "\t\t\t\t\t\t\t\t<button name='released_delete'>Delete</button>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t</tr>";


//sold table
export const sold_table_head = document.createElement("tr");
sold_table_head.innerHTML = "<tr>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tPaintingID\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tTitle\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tDateCreated\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tPrice\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\tBuyer Information\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t</tr>";

export const sold_table_entry = document.createElement("tr");
sold_table_entry.innerHTML = "<tr>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"PaintingID\">ID</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<a class='title_jump'><span class=\"Title\">Title</span></a>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"DateCreated\">DateCreated</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"MSRP\">Price</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"UserName\">buyername</span><br/>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"Email\">buyername</span><br/>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"Address\">buyername</span><br/>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"Phone\">buyername</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t</tr>";

//cart
export const painting_cart = document.createElement("div");
painting_cart.innerHTML = "<div class=\"overview cart\">\n" +
    "\t\t\t\t\t<div class=\"checkbox box checkbox_label\">\n" +
    "\t\t\t\t\t\t<input type=\"checkbox\">\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"box1 box\"><a class=\"image_jump\">\n" +
    "\t\t\t\t\t\t<img src=\"../loading.gif\" class=\"Image\">\n" +
    "\t\t\t\t\t</a></div>\n" +
    "\t\t\t\t\t<div class=\"box2 box\">\n" +
    "\t\t\t\t\t\t<div class=\"box21 box\">\n" +
    "\t\t\t\t\t\t\t<div class=\"textbox\">\n" +
    "\t\t\t\t\t\t\t\t<p><a class=\"title_jump\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"Title\">title</span>\n" +
    "\t\t\t\t\t\t\t\t</a></p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"textbox\">\n" +
    "\t\t\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"ArtistName\">artist name</span>\n" +
    "\t\t\t\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"textbox\">\n" +
    "\t\t\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"MSRP\">price</span>\n" +
    "\t\t\t\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"box22 box\">\n" +
    "\t\t\t\t\t\t\t<div class=\"box221 box\">\n" +
    "\t\t\t\t\t\t\t\t<table class=\"OptionalInfo\">\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span>ReleaseDate</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"ReleaseDate\">value1</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span>Popularity</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"Popularity\">value1</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span>Genre</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"Genre\">value1</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span>Subject</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"Subject\">value1</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t</table>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"box222 box\">\n" +
    "\t\t\t\t\t\t\t\t<p class=\"Description\">texttexttexttexttexttexttexttexttexttexttexttext</p>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"buttons_box flexbox block\">\n" +
    "\t\t\t\t\t\t\t\t\t<button><p>BUY NOW</p></button>\n" +
    "\t\t\t\t\t\t\t\t\t<button><p>DELETE</p></button>\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"button_jump\"><button class=\"ToDetail\"><p>DETAIL</p></button></a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n";
