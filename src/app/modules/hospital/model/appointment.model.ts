import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { Room } from 'src/app/modules/hospital/model/room.model';

enum Status {
    Scheduled, 
    Finished,
    Cancelled
}

export class Appointment{
    id: string = ""
    doctorId: string = ""
    patientId: string = ""
    start: string = ""
    roomId: number = 0
    status: string = ""
    appointmentDuration: number = 20

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.doctorId = obj.doctorId;
            this.patientId = obj.patientId;
            this.start = obj.start;
            this.roomId = obj.roomId;
            this.status = obj.status;     
            this.appointmentDuration = obj.appointmentDuration;
        }
    }

}