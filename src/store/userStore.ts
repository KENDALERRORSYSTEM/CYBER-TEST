import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

interface User {
  id: string;
  level: number;
  xp: number;
  totalXP: number;
  coursesCompleted: number;
  labsCompleted: number;
  achievements: Achievement[];
  skillPoints: number;
}

interface UserStore {
  user: User;
  addXP: (amount: number) => void;
  levelUp: () => void;
  unlockAchievement: (achievement: Achievement) => void;
  updateUser: (data: Partial<User>) => void;
}

const defaultUser: User = {
  id: 'user-1',
  level: 1,
  xp: 0,
  totalXP: 0,
  coursesCompleted: 0,
  labsCompleted: 0,
  achievements: [],
  skillPoints: 0,
};

export const useUserStore = create<UserStore>(
  persist(
    (set) => ({
      user: defaultUser,
      addXP: (amount: number) =>
        set((state) => {
          const newXP = state.user.xp + amount;
          const nextLevelXP = state.user.level * 1000;

          if (newXP >= nextLevelXP) {
            return {
              user: {
                ...state.user,
                level: state.user.level + 1,
                xp: newXP - nextLevelXP,
                totalXP: state.user.totalXP + amount,
              },
            };
          }

          return {
            user: {
              ...state.user,
              xp: newXP,
              totalXP: state.user.totalXP + amount,
            },
          };
        }),
      levelUp: () =>
        set((state) => ({
          user: {
            ...state.user,
            level: state.user.level + 1,
            skillPoints: state.user.skillPoints + 2,
          },
        })),
      unlockAchievement: (achievement: Achievement) =>
        set((state) => ({
          user: {
            ...state.user,
            achievements: [
              ...state.user.achievements,
              { ...achievement, unlockedAt: new Date() },
            ],
          },
        })),
      updateUser: (data: Partial<User>) =>
        set((state) => ({
          user: { ...state.user, ...data },
        })),
    }),
    {
      name: 'x7-user-store',
      version: 1,
    }
  )
);
