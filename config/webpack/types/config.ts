export type BuildMode = 'development' | 'production';

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  port: number;
  isDev: boolean;
}
