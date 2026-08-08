{ SystemCacheCleaner configuration unit }
unit SystemCacheCleanerConfig;

interface

const
  APP_NAME = 'SystemCacheCleaner';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'system cache cleaner';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
