
export interface Actor {
    id: number | null;
    birthDate: Date | null;
    companyId: number | null;
    createdBy: string | null;
    creationTime: string | null;
    email: string | null;
    firstName: string | null;
    isAdmin: boolean | null;
    isEbmMember: boolean | null;
    lastName: string | null;
    modificationTime: string | null;
    modifiedBy: string | null;
    nationality: string | null;
    notifyByEmail: boolean | null;
    passportExpiryDate: Date | null;
    passportNumber: string | null;
    personnelNbr: string | null;
    phone: string | null;
    role: number | null;
    // secondPassportExpiryDate: Date | null;
    // secondPassportNumber: string | null;
    status: number | null;
    // tcn: string | null;
    username: string | null;
    name: string | null;
    isNestleEmployee: boolean | null; // New field added 
}

