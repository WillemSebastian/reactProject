import Dashboard from '../container/Dashboard/Dashboard'
import Login from '../container/Login/Login'
import Leave from '../container/Leave/Leave'
import SubmitLeave from '../container/Leave/SubmitLeave'
import Notifications from '../container/Notifications/Notifications'
import Worksheet1 from '../container/Worksheet/Worksheet1'
import Worksheet2 from '../container/Worksheet/Worksheet2'
import Worksheet3 from '../container/Worksheet/Worksheet3'
import ListWorksheet from '../container/Worksheet/ListWorksheet'
import WorksheetSelectMonth from '../container/Worksheet/WorksheetSelectMonth'
import Success from '../container/Success'
import ApprovalLeave from '../container/Leave/ApprovalLeave'
import CheckinDetail from '../container/Checkin/CheckinDetail'
import Checkin from '../container/Checkin/Checkin'

const Routes = {
    Dashboard: { screen: Dashboard }, 
    Login: { screen: Login },
    Leave: { screen: Leave},
    SubmitLeave: { screen: SubmitLeave},
    Notifications: { screen: Notifications },
    Worksheet3: { screen: Worksheet3 },
    Success: { screen: Success },
    Worksheet2: { screen: Worksheet2 },
    Worksheet: { screen: Worksheet1 },
    WorksheetSelectMonth: { screen: WorksheetSelectMonth },
    ListWorksheet: { screen: ListWorksheet},  
    Success: { screen: Success },
    ApprovalLeave: { screen: ApprovalLeave },
    CheckinDetail: { screen: CheckinDetail },
    Checkin: { screen: Checkin },
}

export default Routes