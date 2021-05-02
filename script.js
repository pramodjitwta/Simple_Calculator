        function insert(num){
            document.form.textview.value = document.form.textview.value+num;
        }
        function equal(){
            let exp = document.form.textview.value;
            if(exp){
                document.form.textview.value = eval(exp)
            }
            else{
                console.log('Something Wrong')
            }
        }
        function c(){
            document.form.textview.value = null;
        }
