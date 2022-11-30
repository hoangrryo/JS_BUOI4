// BÀI TẬP 1: Sắp xếp số nguyên theo thứ tự tăng dần
function sapXepSo() {
    var a, b, c = null;
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    if(Number.isInteger(so1))
    {
        if(Number.isInteger(so2))
        {
            if(Number.isInteger(so3))
            {
                if(so1 >= so2)
                {
                    if(so2 >= so3)
                    {
                        document.getElementById("showArea").innerHTML = `thứ tự tăng dần là ${so3} ${so2} ${so1}`
                    }
                    else
                    {
                        if(so1 >= so3)
                        {
                            document.getElementById("showArea").innerHTML = `thứ tự tăng dần là ${so2} ${so3} ${so1}`
                        }
                        else
                        {
                            document.getElementById("showArea").innerHTML = `thứ tự tăng dần là ${so2} ${so1} ${so3}`
                        }
                    }
                }
                else
                {
                    if(so2 >= so3){
                        if(so1 >= so3) {
                            document.getElementById("showArea").innerHTML = `thứ tự tăng dần là ${so3} ${so1} ${so2}`
                        }
                        else
                        {
                            document.getElementById("showArea").innerHTML = `thứ tự tăng dần là ${so1} ${so3} ${so2}`
                        }
                    }
                    else
                    {
                        document.getElementById("showArea").innerHTML = `thứ tự tăng dần là ${so1} ${so2} ${so3}`
                    }
                }
            }else{
                document.getElementById("showArea").innerHTML = `Giá trị thứ ba không phải là số nguyên`
            }
        }else{
            document.getElementById("showArea").innerHTML = `Giá trị thứ hai không phải là số nguyên`
        }
    }else{
        document.getElementById("showArea").innerHTML = `Giá trị thứ nhất không phải là số nguyên`
    }
}



//BÀI TẬP 2: viết chương trình chào hỏi các thành viên trong gia đình
function chaoHoi(){
    var a = document.getElementById("select").value;
    console.log(a);
    switch (document.getElementById("select").value)
    {
        case "B":
            document.getElementById('showArea2').innerHTML = `Xin chào Bố`;
            break;
        case "M":
            document.getElementById('showArea2').innerHTML = `Xin chào Mẹ`;
            break;
        case "A":
            document.getElementById('showArea2').innerHTML = `Xin chào Anh Trai`;
            break;
        case "E":
            document.getElementById('showArea2').innerHTML = `Xin chào Em Gái`;
            break;
    }
}


//BÀI TẬP 3: Đếm số chẵn - lẻ
function demSoChanLe() {
    var a = 0;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;
    var so6 = document.getElementById("so6").value * 1;
    if (Number.isInteger(so4))
    {
        if (Number.isInteger(so5))
        {
            if (Number.isInteger(so6))
            {
                if(so4 % 2 == 0)
                {
                    a++;
                }
                if(so5 % 2 == 0)
                {
                    a++;
                }
                if(so6 % 2 == 0)
                {
                    a++;
                }
                document.getElementById("showArea3").innerHTML = `Có ${a} số chẵn và ${3 - a} số lẻ`
            }
            else
            {
                document.getElementById("showArea3").innerHTML = `Số ${so6} không phải là số nguyên`;
            }
        }
        else
        {
            document.getElementById("showArea3").innerHTML = `Số ${so5} không phải là số nguyên`;
        }
    }
    else
        {
            document.getElementById("showArea3").innerHTML = `Số ${so4} không phải là số nguyên`;
        }
}



//BÀI TẬP 4: Xét tam giác
function xetTamGiac() {
    var a = document.getElementById("so7").value * 1;
    var b = document.getElementById("so8").value * 1;
    var c = document.getElementById("so9").value * 1;
    if  ( Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2) || 
          Math.pow(b,2) == Math.pow(a,2) + Math.pow(c,2) || 
          Math.pow(c,2) == Math.pow(b,2) + Math.pow(a,2)
        )
    {
        document.getElementById("showArea4").innerHTML = `Đây là tam giác VUÔNG`
    }
    else
    {
        if (a == b && a == c)
        {
            document.getElementById("showArea4").innerHTML = `Đây là tam giác ĐỀU`
        }
        else
        {
            if (a == b || a == c || b == c)
            {
                document.getElementById("showArea4").innerHTML = `Đây là tam giác CÂN`
            }
            else
            {
                document.getElementById("showArea4").innerHTML = `Đây là tam giác THƯỜNG`
            }
        }
    }
}