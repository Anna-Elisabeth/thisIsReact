function ManyButtons() {
    function FirstButton() {

        alert("OINK")
    }




    return (


        <div>


            <button onClick={FirstButton}>First little piggy </button> <br />
            <button onClick={function () { alert("OINKOINK") }}>Second little piggy</button><br />
            <button onClick={() => alert("OINK")}>Third little piggy</button><br />



        </div>





    );

}







export default ManyButtons;