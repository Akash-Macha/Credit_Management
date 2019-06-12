function ajax() {
    clean();
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            /* cleaning up */
            document.getElementById("display_other_persons_id").innerHTML = "";

            /* updating the div - 'content' */
            document.getElementById("content").innerHTML = req.responseText;
            //            console.log(req.responseText);

        }
    }

    req.open('GET', 'showusers.php', true);
    req.send();
}

function clean() {
    // console.log("Called - clean()");

var instructions_1 = '<div>'+
'            <h2 id="instructions_heading" >Instructions:</h2>'+
'        </div>'+
''+
'        <!-- <div style="display:block; margin: 0 auto;" > -->'+
'        <div >'+
'            <div>'+
'                <h3 id="instructions">1. To Show All Users:</h3>'+
'                <p>You can see all the users by going into<br>'+
'                    <p id="instructions">Available Options → Show All Users</p>'+
'                </p>'+
'            </div>'+
''+
'            <div>'+
'                <h3 id="instructions">2. To View Credits of a person</h3>'+
'                <p>You can see the credits of a particular person by going into<br>'+
'                    <p id="instructions">Available Options → Show All Users →<br /></p>'+
'                    <p id="instructions">Select/click on a person to view their respective credits</p>'+
'                </p>'+
'            </div>'+
''+
'            <div>'+
'                <h3 id="instructions">3. To Transfer Credits</h3>'+
'                <p>You can Transfer Credits in the following way<br>'+
'                    <p id="instructions">Available Options → Show All Users → <br></p>'+
'                    <p id="instructions">Select/click on a person to view their respective credits → <br /></p>'+
'                    <p id="instructions">click "Click here to Transfer Credits" →<br /></p>'+
'                    <p id="instructions">choose a person to transfer credits → <br /></p>'+
'                    <p id="instructions">Enter amount of Credits to Transer →<br /></p>'+
'                    <p id="instructions">click Send!</p>'+
'                </p>'+
'            </div>'+
'        </div>';

    document.getElementById("content").innerHTML = instructions_1;
    document.getElementById("display_other_persons_id").innerHTML = "";
}

function getRadioValue() {
    /* https://stackoverflow.com/a/17796775 */
    if(document.querySelector('input[name = "otherPerson"]:checked') != null) {

    var otherPerson = document.querySelector('input[name = "otherPerson"]:checked').value;

    return otherPerson;
}

//    alert("You entered into getRadioValue(): radio value-> " + otherPerson);
}

function getAmount() {

    var amount = document.getElementById("amount").value;
//    alert("You've entered into getAmount() - amount : " + amount);

    return amount;

}
// From, To, Amount transaction transaction
//function transaction(from, to, amount){
// onclick= "transaction('" . $fromName . "'" . ", " . $from_u_id . ")";  -- from  displyaOtherPersons.php
function transaction(from_u_id) {
    var to_u_id = getRadioValue();  //  gets the "" to_u_id ""
    var amount = getAmount();  // gets the amount

   // alert("we're in transaction(); from: " + from_u_id + ", TO_U_ID: " + to_u_id + ", amt: " + amount);

   /* --validation */
   if(to_u_id == undefined){
    alert("Please \"Select a person\" to continue you're Transaction!");
   }else if(amount === ""){
    alert("Please \"Enter the amount of credits to transfer\" to continue you're Transaction!");
   }else{

        //alert("we're in transaction; from: "+from); //+", to: "+to+", amt: "+amount);
    //    alert("we're in transaction(); from: " + from_u_id + ", TO_U_ID: " + to_u_id + ", amt: " + amount);

        var req = new XMLHttpRequest();

        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {

                clean();
                document.getElementById("content").innerHTML = "";
                document.getElementById("display_other_persons_id").innerHTML = req.responseText;

    //            alert("transaction on ready state inside ***********");
                // console.log(req.responseText);
            }
        }

        req.open("POST", "updateTranscationTable.php", true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


        // take the amount to be credited from the person and to the person
        // in javascript and pass the value

        req.send("from_u_id=" + from_u_id + "&to_u_id=" + to_u_id + "&amount=" + amount);
    }

}

// transfer('" + fromName + "', " + credits + ", " + from_u_id + ")"
function displayOtherPersons(fromName, credits, from_u_id) {
    //    document.getElementById("dummy").innerHTML = "<h5>BANG</h5>";

//    alert("displayOtherPersons() ; " + fromName + "-" + "credits -" + credits + ", from_u_id - " + from_u_id);

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {

//            clean();

            document.getElementById("display_other_persons_id").innerHTML = req.responseText;
//            alert("displayOtherPersons() on ready state inside");
            //            console.log(req.responseText);
        }
    }


    req.open("POST", "displayOtherPersons.php", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    // take the amount to be credited from the person and to the person
    // in javascript and pass the value

    req.send("fromName=" + fromName + "&from_u_id=" + from_u_id); //

}
// viewParticularPerson("' . $row['name']. '"' . ', '. $row['credits'] . ', ' . $row['constact_id'] .')
function viewParticularPerson(fromName, credits, from_u_id) {
    var currentHTML_1 = "" +
        "<div align=\"center\" style=\"display: inline-block; \"> " +

            "<table align=\"center\" >" +
            "<tr>" +
                "<th>Name</th>" +
                "<th>Credits</th>" +
            "</tr> " +

            "<tr>" +
                "<td>" + fromName + "</td>" +
                "<td>" + credits + "</td>" +
            "</tr>" +
            "</table>" +



        "<input type='button' value='Click here to Transfer Credits' onclick=\"displayOtherPersons('" + fromName + "', " + credits + ", " + from_u_id +")\"/> " +
        "</div>"    +
        "";


    var currentHTML_2 = '<div align="center" style="display: inline-block; ">'+
    '   <table style="width: 200px; padding-left: 20px; padding-right: 20px;">'+
    '      <tbody>'+
    '         <tr>'+
    '            <th>Name</th>'+
    '            <th>Credits</th>'+
    '         </tr>'+
    '         <tr>'+
    '            <td>'+ fromName + '</td>'+
    '            <td>' + credits + '</td>'+
    '         </tr>'+
    '      </tbody>'+
    '   </table>'+
    '   <input type="button" value="Click here to Transfer Credits" onclick="displayOtherPersons(\''+ fromName +'\', ' + credits + ', ' + from_u_id +')"> ' +
    '</div>';



//    alert("from  viewParticularPerson()  :  onclickSubmit: calling displayOtherPersons('" + fromName + "', " + credits + ", " + from_u_id + ")" );
    clean();
    document.getElementById("content").innerHTML = currentHTML_2;

}
