function changepositivenumberstobig()
{var arr=[]

    for(var i= 0; i<arr.length;i++)
    {
        if (arr[i]>0)
        {
            arr[i]="big";
        }

        return arr;
    }

    changepositivenumberstobig ([-1, 1, -2, 2])

}

function printlowreturnhigh(arr)
{
    var low=arr[0];

    var high=arr[0];

    for (var i= 0; i<arr.length; i++)
    {
        if (arr[i] > high)
        {
            arr[i] = high
        }

        if (arri[i] < high)
        {
            arr[i]= low;
        }

    }
    console.log(low);
    return high;
}
printlowreturnhigh ([-1, 3, 5, -5])

function printoneandreturnanother(arr)
{
    
    console.log(arr[arr.length - 3]);
    return arr[0];
    
    
}
printoneandreturnanother ([-1, 3, 5, -5]);

