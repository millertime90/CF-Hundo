// SITE JS 

/* 
    <h5>Enter Values</h5>
    <form class="row gy-2 gx-3">
        <div class="col">
            <input id="startValue" type="number" class="form-control" 
                   placeholder="Start Value" value="0" aria-label="Start Value" 
            />
        </div>
        <div class="col">
            <input id="endValue" type="number" class="form-control" 
                   placeholder="End Value" value="100" aria-label="End Value" 
            />
        </div>
        <div class="col-12 d-flex justify-content-end">
            <button id="btnSubmit" type="button" class="btn btn-dark btn-lg">Display the <span class="logoFont">HUNDO</span></button>
        </div>
    </form>
    <h2 class="mt-5 border-bottom border-2">Results</h2>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <tbody id="results">
                <!-- Results rendered here with JS -->
            </tbody>
        </table>
    </div>
*/ 

/*      NOTABLE ELEMENTS LIST 

    input#startValue, 
    input#endValue, 
    button#btnSubmit, & 
    tbody#results 

*/ 

function displayHundo() { 

    let isEven_orOdd = function(n) { 

        if(n == 0) { return "odd"; } 
        else if (n % 2 == 0) { return "even"; } 
        else { return "odd"; }
    
    }; 

    let startValue = document.querySelector("#startValue"); 
    let endValue = document.querySelector("#endValue"); 
    let results = document.querySelector("#results"); 

    results.innerHTML = ""; 

    for(let i = Number.parseInt(startValue.value); i <= Number.parseInt(endValue.value); i++) { 

        results.append((() => {

            let tdata = document.createElement("TR"); 
            tdata.innerHTML = `<td class=${isEven_orOdd(i)}>${i}</td>`; 

            return tdata; 

        })()); 

    } 

} 