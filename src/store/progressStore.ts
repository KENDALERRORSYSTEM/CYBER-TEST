import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressEntry {
  courseId: string;
  progress: number;
  completedAt?: Date;
  lastAccessedAt: Date;
}

interface ProgressStore {
  progress: Record<string, ProgressEntry>;
  updateProgress: (courseId: string, progress: number) => void;
  completeLesson: (courseId: string) => void;
  getProgress: (courseId: string) => ProgressEntry | undefined;
}

export const useProgressStore = create<ProgressStore>(
  persist(
    (set, get) => ({
      progress: {},
      updateProgress: (courseId: string, progress: number) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [courseId]: {
              courseId,
              progress: Math.min(progress, 100),
              lastAccessedAt: new Date(),
            },
          },
        })),
      completeLesson: (courseId: string) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [courseId]: {
              courseId,
              progress: 100,
              completedAt: new Date(),
              lastAccessedAt: new Date(),
            },
          },
        })),
      getProgress: (courseId: string) => {
        const state = get();
        return state.progress[courseId];
      },
    }),
    {
      name: 'x7-progress-store',
      version: 1,
    }
  )
);
