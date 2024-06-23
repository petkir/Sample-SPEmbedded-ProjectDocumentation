/*

@microsoft.graph.downloadUrl
: 
"https://acpcubidodev.sharepoint.com/contentstorage/CSP_11760bde-e025-4cd9-87b9-868c4c5d7767/_layouts/15/download.aspx?UniqueId=a8fd60e6-fbff-4781-b238-ff6e50d6a9de&Translate=false&tempauth=v1.eyJzaXRlaWQiOiIxMTc2MGJkZS1lMDI1LTRjZDktODdiOS04NjhjNGM1ZDc3NjciLCJhcHBfZGlzcGxheW5hbWUiOiJTaGFyZVBvaW50IEVtYmVkZGVkIEFwcCIsImFwcGlkIjoiODFiMTk1OGItNGEwMy00NTk3LTg1MzItYmUzMWE2Y2RlOWQ1IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2FjcGN1Ymlkb2Rldi5zaGFyZXBvaW50LmNvbUBjZDExMDc5Ny02MzIzLTQ3YTYtYjY1MC1mYjIzMTYwNTFkNmMiLCJleHAiOiIxNzE5MTcxNTcyIn0.EgsI0KT_rrvviT0QBRoOMjAuMTkwLjE5MC4xMDEqLGVYR2djcUFuUmY1WWpEM1BkRG1RY2R2c0thL0hCbkxIOWlmVGUwdS9mV1U9MLMBOAFCEKE1iSSW0ACQJ245es4QzQRKEGhhc2hlZHByb29mdG9rZW5SCFsia21zaSJdcikwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDM1NGRhMjlhOEBsaXZlLmNvbXoBMoIBEgmXBxHNI2OmRxG2UPsjFgUdbJIBClBldGVyIFBhdWyaAQlLaXJzY2huZXKiAS9wZXRlcnBhdWxraXJzY2huZXJAYWNwY3ViaWRvZGV2Lm9ubWljcm9zb2Z0LmNvbaoBEDEwMDMyMDAzNTREQTI5QTiyASNjb250YWluZXIuc2VsZWN0ZWQgYWxscHJvZmlsZXMucmVhZMgBAQ.7rQmAHrDvpzmzRnUKkd99J7PxvfmnsHsNhZqGUKVNvQ&ApiVersion=2.0"
@odata.context
: 
"https://graph.microsoft.com/v1.0/$metadata#drives('b%213gt2ESXg2UyHuYaMTF13ZzQVnVt82itCh-NbpiqaszC2VCh11B4LQoTcg6MLP2rw')/items('01VYDXOT5CPHHNDLUHFZGYWGL2SBFL4WVL%3A')/children/$entity"
cTag
: 
"\"c:{A8FD60E6-FBFF-4781-B238-FF6E50D6A9DE},1\""
createdBy
: 
{application: {…}, user: {…}}
createdDateTime
: 
"2024-06-23T18:39:32Z"
eTag
: 
"\"{A8FD60E6-FBFF-4781-B238-FF6E50D6A9DE},1\""
file
: 
{mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', hashes: {…}}
fileSystemInfo
: 
{createdDateTime: '2024-06-23T18:39:32Z', lastModifiedDateTime: '2024-06-23T18:39:32Z'}
id
: 
"01VYDXOT7GMD62R773QFD3EOH7NZINNKO6"
lastModifiedBy
: 
{application: {…}, user: {…}}
lastModifiedDateTime
: 
"2024-06-23T18:39:32Z"
name
: 
"PalfingerPlatformsELA.docx"
parentReference
: 
{driveType: 'other', driveId: 'b!3gt2ESXg2UyHuYaMTF13ZzQVnVt82itCh-NbpiqaszC2VCh11B4LQoTcg6MLP2rw', id: '01VYDXOTZGLCOLVRNS6RE2O4LPXIXBRKQD', name: 'children', path: '/drives/b!3gt2ESXg2UyHuYaMTF13ZzQVnVt82itCh-NbpiqaszC2VCh11B4LQoTcg6MLP2rw/root:/123/children', …}
shared
: 
{scope: 'users'}
size
: 
865277
webUrl
: 
"https://acpcubidodev.sharepoint.com/contentstorage/CSP_11760bde-e025-4cd9-87b9-868c4c5d7767/_layouts/15/Doc.aspx?sourcedoc=%7BA8FD60E6-FBFF-4781-B238-FF6E50D6A9DE%7D&file=PalfingerPlatformsELA.docx&action=default&mobileredirect=true"
[[Prototype]]
: 
Object
*/

export interface IFileProps {
    containerId: string;
    folderId: string;

    "@microsoft.graph.downloadUrl": string;
    name: string;
    id: string;
    
    folder?: boolean;
  
    webUrl: string;
    
}

