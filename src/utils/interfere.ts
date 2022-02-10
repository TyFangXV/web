export interface IlanguageCount {
    language: string;
    count: number;
    index: number;
  }
  
export interface IState {
    statsLoaded  :boolean;
    LanguageCount : IlanguageCount[];
  }