function marks(m)
        {
            if(m>=90)
            return 10;
            else if (m<=89&&m>=80)
            return 9;
            else if (m<=79&&m>=70)
            return 8;
            else if (m<=69&&m>=60)
            return 7;
            else if (m<=59&&m>=50)
            return 6;
            else if (m<=49&&m>=45)
            return 5;
            else if (m<=44&&m>=40)
            return 4;
            else
            return 0;
        }

            function calculate()
        {

        var a=parseInt(document.getElementById("sub1").value);
        var b=parseInt(document.getElementById("sub2").value);
        var c=parseInt(document.getElementById("sub3").value);
        var d=parseInt(document.getElementById("sub4").value);
        var e=parseInt(document.getElementById("sub5").value);
        var f=parseInt(document.getElementById("sub6").value);
        var g=parseInt(document.getElementById("sub7").value);
        var h=parseInt(document.getElementById("sub8").value);
    

        var i=parseInt(document.getElementById("4credit1").value);
        var j=parseInt(document.getElementById("4credit2").value);
        var k=parseInt(document.getElementById("3credit1").value);
        var l=parseInt(document.getElementById("3credit2").value);
        var m=parseInt(document.getElementById("3credit3").value);
        var n=parseInt(document.getElementById("1credit1").value);
        var o=parseInt(document.getElementById("1credit2").value);
        var p=parseInt(document.getElementById("1credit3").value);
    
        var a1=parseInt(document.getElementById("4credit1").value)*marks(a);
        var a2=parseInt(document.getElementById("4credit2").value)*marks(b);
        var a3=parseInt(document.getElementById("3credit1").value)*marks(c);
        var a4=parseInt(document.getElementById("3credit2").value)*marks(d);
        var a5=parseInt(document.getElementById("3credit3").value)*marks(e);
        var a6=parseInt(document.getElementById("1credit1").value)*marks(f);
        var a7=parseInt(document.getElementById("1credit2").value)*marks(g);
        var a8=parseInt(document.getElementById("1credit3").value)*marks(h);


        var r=((a1+a2+a3+a4+a5+a6+a7+a8)/(i+j+k+l+m+n+o+p));


        document.getElementById("result").value=parseFloat(r);
    }