import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Issue schema
const issueSchema = new Schema({
  title: { type: String, required: [true, "Issue title is required"] },
  status: { type: String, required: [true, "Choose the issue's status"] },
  createdAt: Date,
  updatedAt: Date,
  comments: String,
  priority: { type: String, required: [true, "Priority should be stated"] },
  userId: { type: String, required: [true, "UserId is required"] },
});
const Issue = mongoose.model("issue", issueSchema);

// Find issues for the current user
export async function getIssues(query: object) {
  console.log("getting issues for user...");
  const issueFound = await Issue.find(query);
  return issueFound;
}

// Add issue
export async function addIssue(issue: any) {
  console.log("adding issue...");
  await new Issue({
    title: issue.title,
    status: issue.status,
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: issue.comments || null,
    priority: issue.priority,
    userId: issue.userId,
  }).save();
}

// Update issue
export async function updateIssue(issues: any) {
  console.log("updating issue...");
  const filter = { _id: issues._id };
  const update = issues;
  update.updatedAt = new Date();
  await Issue.findOneAndUpdate(filter, update);
}

// Delete issue
export async function deleteIssue(id: String) {
  console.log("deleting issue...");
  await Issue.findOneAndDelete({ _id: id });
}
