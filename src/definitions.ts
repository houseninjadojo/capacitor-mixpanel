export interface MixpanelPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
