import { createClient } from "@supabase/supabase-js"

const url = "https://jmgxjrwvtirrxnrjarwa.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZ3hqcnd2dGlycnhucmphcndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNzQ2MzQsImV4cCI6MjA2ODk1MDYzNH0.ZgiWBR8RviMUxZx48Dw3rOfgevFcGH1Zf9zLwRZtnWo"

const supabase = createClient(url, key)

export default function mediaUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve , reject) => {

            if(file == null){
                reject("No File Selected");
                return
            }

            const timestamp = new Date().getTime();
            const newName = timestamp+file.name;

            supabase.storage.from("images").upload(newName, file,{
                upsert:false,
                cacheControl : '3600',
            }) .then(()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl
                resolve(publicUrl);
    
            }).catch(
                ()=>{
                    reject("Error occured in supaabase connection");
                }
            )
        }
    )

    

    return mediaUploadPromise
}
