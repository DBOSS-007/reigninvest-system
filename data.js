window.ReignDB = {
  users: [
    {id:"USR-1042",name:"Daniel Bassey",email:"daniel@example.com",kyc:"Verified",wallet:1250000,plans:3,status:"Active",registered:"01 Oct 2026"},
    {id:"USR-1038",name:"Grace Okafor",email:"grace@example.com",kyc:"Verified",wallet:845000,plans:2,status:"Active",registered:"30 Sep 2026"},
    {id:"USR-1029",name:"Samuel James",email:"samuel@example.com",kyc:"Pending",wallet:420000,plans:1,status:"Active",registered:"29 Sep 2026"},
    {id:"USR-1017",name:"Mercy John",email:"mercy@example.com",kyc:"Verified",wallet:2180000,plans:4,status:"Frozen",registered:"25 Sep 2026"},
    {id:"USR-1008",name:"David Essien",email:"david@example.com",kyc:"Pending",wallet:195000,plans:1,status:"Active",registered:"22 Sep 2026"}
  ],
  kyc:[
    {case:"KYC-8841",applicant:"Samuel James",document:"National ID",number:"•••• 4921",submitted:"12 min ago",status:"Pending"},
    {case:"KYC-8839",applicant:"Amina Yusuf",document:"Passport",number:"•••• 1108",submitted:"24 min ago",status:"Pending"},
    {case:"KYC-8835",applicant:"David Essien",document:"Driver Licence",number:"•••• 7732",submitted:"37 min ago",status:"Pending"},
    {case:"KYC-8828",applicant:"John Peter",document:"National ID",number:"•••• 3190",submitted:"1 hr ago",status:"Pending"}
  ],
  payouts:[
    {ref:"WD-30981",holder:"Mercy John",amount:340000,destination:"GTBank •••• 9012",requested:"24 min ago",status:"Pending"},
    {ref:"WD-30977",holder:"Samuel James",amount:120000,destination:"UBA •••• 4421",requested:"51 min ago",status:"Pending"},
    {ref:"WD-30970",holder:"Grace Okafor",amount:85000,destination:"Access •••• 1198",requested:"2 hrs ago",status:"Pending"},
    {ref:"WD-30961",holder:"David Essien",amount:60000,destination:"Zenith •••• 3007",requested:"4 hrs ago",status:"Pending"}
  ],
  risks:[
    {severity:"Critical",rule:"Large withdrawal",account:"USR-1017",detail:"₦340,000 withdrawal exceeds review threshold"},
    {severity:"Critical",rule:"Rapid repeat requests",account:"USR-1029",detail:"4 withdrawal attempts in 20 minutes"},
    {severity:"Medium",rule:"Unverified investment",account:"USR-1008",detail:"Investment exceeds ₦100,000 while KYC is pending"},
    {severity:"Low",rule:"Login anomaly",account:"USR-1038",detail:"New device and unusual location"}
  ],
  audit:[
    {time:"19:02",event:"KYC_SUBMITTED",subject:"USR-1029",detail:"Identity documents uploaded"},
    {time:"18:54",event:"PAYOUT_REQUESTED",subject:"USR-1017",detail:"Withdrawal request ₦340,000"},
    {time:"18:41",event:"LOGIN_FAILED",subject:"USR-1008",detail:"Three failed attempts"},
    {time:"18:28",event:"KYC_APPROVED",subject:"USR-1038",detail:"Administrator review completed"},
    {time:"18:10",event:"PROFILE_UPDATED",subject:"USR-1042",detail:"Bank details updated"}
  ]
};
