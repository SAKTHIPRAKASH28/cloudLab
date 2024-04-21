from fastapi import FastAPI, File, UploadFile
import dropbox

app = FastAPI()

#
DROPBOX_ACCESS_TOKEN = "sl.Bzyj8-AMKGlQacMib_OXRnWeqtEpgpn9AapRNs5vGkzD80FZ2M_OySRRnlESAhxDpDGHqJrgw4ghG2U1Zd6iEMlfIcf-cU2sj1n7uHHJH22IjoIeHg4O_jkHuCmKyL1S-L5m6lKC86LQuwU  "
dbx = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    try:
        res = dbx.files_upload(contents, "/" + file.filename)
        print(res)
        return {"filename": file.filename, "status": "uploaded"}
    except dropbox.exceptions.ApiError as err:
        return {"error": f"Dropbox API error: {err}"}
