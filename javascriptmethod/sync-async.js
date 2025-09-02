// getuserdata




const mypromise = new Promise((resolve, reject)=>
{
    let flag =true;
    if(flag){
        resolve("success");
    }
    else
        reject("Failed");
    }
);

mypromise.then((result));
         .catch(er){
          console.log("error :"er)};




        //  const mytask = async() =>
        //    try {
        //     await updateuserdat ();
        //  } 
        //  catch

        // mytask();