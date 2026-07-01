import IssueStatsRow from "./IssueStatsRow"
import { formatDate } from "../../../utils/formatDate"
import StatusBadge from "../../../components/ui/StatusBadge"
import PriorityBadge from "../../../components/ui/PriorityBadge"

export default function IssueStats({ issue }) {

    return (
        <div className="flex flex-col gap-10 py-2">
            <div className="gap-3">
                <h3 
                    className="text-2xl text-[#F9FAFB] font-bold"
                > 
                    Details 
                </h3>

                <IssueStatsRow 
                    label="Status" 
                    value={<StatusBadge status={issue.status} /> } 
                />

                <IssueStatsRow 
                    label="Priority" 
                    value={<PriorityBadge priority={issue.priority} /> }
                />
            </div>

            <div className="gap-3">
                <h3 
                    className="text-2xl text-[#F9FAFB] font-bold"
                > 
                    Dates 
                </h3>

                <IssueStatsRow 
                    label="Raised on" 
                    value={formatDate(issue.created_at)} 
                />

                <IssueStatsRow 
                    label="Last update" 
                    value={formatDate(issue.updated_at)} 
                />

                <IssueStatsRow 
                    label="Due Date" 
                    value={formatDate(issue.due_date)} 
                />
            </div>

            <div className="gap-3">
                <h3 
                    className="text-2xl text-[#F9FAFB] font-bold"
                > 
                    People 
                </h3>

                <IssueStatsRow 
                    label="Reporter" 
                    value={issue.reporter.name} 
                />

                <IssueStatsRow 
                    label="Assign To" 
                    value={issue.assignee} 
                />
            </div>
        </div>
    )
}