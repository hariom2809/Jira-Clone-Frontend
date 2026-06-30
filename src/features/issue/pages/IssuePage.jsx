import { useParams } from "react-router-dom"
import PaeContainer from "../../../components/ui/PageContainer"
import IssueDetail from "../components/IssueDetail"

export default function IssuePage() {

    const { issueId } = useParams()

    return (
        <PaeContainer>
            <div className="flex grid-6">
                <div className="w-7/10">
                    <IssueDetail issueId={issueId} />
                </div>

                <div className="w-3/10">
                    Sidebar 
                </div>
            </div>
        </PaeContainer>
    )
}