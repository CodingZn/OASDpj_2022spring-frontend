export const PicBaseSrc = "../works/"


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
    "                                <p><span>Like The Review</span></p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n"

//painting overview
export const overviewElementModal = document.createElement("div");

overviewElementModal.innerHTML =
    "                <div class=\"overview home\">\n" +
    "                    <div class=\"box1 box\">\n" +
    "                        <img src=\"../loading.gif\" class=\"Image\">\n" +
    "                    </div>\n" +
    "                    <div class=\"box2 box\">\n" +
    "                        <div class=\"box21 box\">\n" +
    "                            <div class=\"textbox\">\n" +
    "                                <p>\n" +
    "                                    <span class=\"Title\">title</span>\n" +
    "                                </p>\n" +
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
    "                                <button class=\"ToDetail\"><p>DETAIL</p></button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n"

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
    "\t\t<span class=\"Title\">Title</span>\n" +
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
    "\t\t\t\t\t\t\t\t<span class=\"Title\">Title</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"ArtistName\">ArtistName</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"MSRP\">MSRP</span>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t<button>Change</button>\n" +
    "\t\t\t\t\t\t\t\t<button>Delete</button>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t</tr>";


//sold table
export const sold_table_head = document.createElement("tr");
sold_table_head.innerHTML = "<tr>\n" +
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
    "\t\t\t\t\t\t\t\t<span class=\"Title\">Title</span>\n" +
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

//??
export const sold = document.createElement("tr");
sold.innerHTML = "";