import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CTFSubmission {
  challengeId: string;
  submittedAt: Date;
  correct: boolean;
  xpEarned: number;
}

interface CTFStore {
  submissions: CTFSubmission[];
  localScore: number;
  addSubmission: (submission: CTFSubmission) => void;
  getSubmissions: () => CTFSubmission[];
  getLocalRanking: () => { rank: number; score: number };
}

export const useCTFStore = create<CTFStore>(
  persist(
    (set, get) => ({
      submissions: [],
      localScore: 0,
      addSubmission: (submission: CTFSubmission) =>
        set((state) => ({
          submissions: [...state.submissions, submission],
          localScore: state.localScore + (submission.correct ? submission.xpEarned : 0),
        })),
      getSubmissions: () => get().submissions,
      getLocalRanking: () => {
        const state = get();
        return { rank: 1, score: state.localScore };
      },
    }),
    {
      name: 'x7-ctf-store',
      version: 1,
    }
  )
);
