import { Company, Job } from "./db.js";
export const resolvers = {
  Query: {
    greeting: () => {
      "Hello GraphQl";
    },
    jobs: () => Job.findAll(),
    Job: (_root, args) => Job.findById(args.id),
    company: (_root, args) => Company.findById(args.id),
  },
  Job: {
    Company: (job) => Company.findById(job.companyId),
  },
  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Mutation: {
    createJob: (_root, { input }) => Job.create(input),
    deleteJob: (_root, { input }) => Job.delete(input.id),
    updateJob: async(root, { input }) => {
    const newInput = await Job.findById(input.id)
    Object.assign(newInput, input)
      return Job.update(newInput);
    },
  },
};
