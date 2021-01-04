namespace :start do
    


    

    task :production do 
        exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
    end
end

desc 'Start production server'
task :start => 'start:production'

