 let arr =[8 ,4, 2, 1, 5, 4, 2]
  let   count =0
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;i<arr.length;j++){
           
            console.log("index===>"+ i,j)
            if((i+j)===arr[i]+arr[j])
            count++
            
        }
    }